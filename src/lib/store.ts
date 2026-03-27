import type { Client, CoachingSession, Assessment } from "@/types/client";

const SHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SA_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const SA_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
const USE_SHEETS = !!(SHEET_ID && SA_EMAIL && SA_KEY);

// 서버 시작 시 환경변수 진단 로그
console.log("[store] 환경변수 진단:", {
  GOOGLE_SHEETS_SPREADSHEET_ID: SHEET_ID ? `✅ 설정됨 (${SHEET_ID.slice(0, 8)}...)` : "❌ 없음",
  GOOGLE_SERVICE_ACCOUNT_EMAIL: SA_EMAIL ? `✅ 설정됨 (${SA_EMAIL})` : "❌ 없음",
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: SA_KEY
    ? `✅ 설정됨 (길이: ${SA_KEY.length}, BEGIN 포함: ${SA_KEY.includes("BEGIN PRIVATE KEY")})`
    : "❌ 없음",
  USE_SHEETS,
});

// ─── Google Sheets Backend ───────────────────────────────

async function getSheetsClient() {
  const { google } = await import("googleapis");

  // Handle private key: normalize all possible formats
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "";

  // 1. Strip surrounding quotes (Vercel UI에서 따옴표째 붙여넣은 경우)
  if (
    (privateKey.startsWith('"') && privateKey.endsWith('"')) ||
    (privateKey.startsWith("'") && privateKey.endsWith("'"))
  ) {
    privateKey = privateKey.slice(1, -1);
  }

  // 2. Replace literal \n with actual newlines
  privateKey = privateKey.replace(/\\n/g, "\n");

  console.log("[store] Private Key 진단:", {
    길이: privateKey.length,
    시작: privateKey.slice(0, 30),
    끝: privateKey.slice(-30),
    줄바꿈수: (privateKey.match(/\n/g) || []).length,
  });

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

let sheetsReady = false;

async function ensureSheets() {
  if (sheetsReady) return;
  const sheets = await getSheetsClient();
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

  const res = await sheets.spreadsheets.get({ spreadsheetId: id });
  const existing =
    res.data.sheets?.map((s) => s.properties?.title) || [];

  const tabs = [
    {
      title: "내담자",
      headers: [
        "id",
        "이름",
        "연락처",
        "이메일",
        "출생연도",
        "성별",
        "프로그램",
        "등록일",
        "메모",
      ],
    },
    {
      title: "코칭기록",
      headers: [
        "id",
        "clientId",
        "날짜",
        "회차",
        "소요시간",
        "코칭내용",
        "메모",
      ],
    },
    {
      title: "검사결과",
      headers: [
        "id",
        "clientId",
        "검사도구",
        "날짜",
        "결과",
        "메모",
      ],
    },
  ];

  for (const tab of tabs) {
    if (!existing.includes(tab.title)) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: id,
        requestBody: {
          requests: [
            { addSheet: { properties: { title: tab.title } } },
          ],
        },
      });
      await sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: `'${tab.title}'!A1`,
        valueInputOption: "RAW",
        requestBody: { values: [tab.headers] },
      });
    }
  }
  sheetsReady = true;
}

async function readSheets(): Promise<Client[]> {
  await ensureSheets();
  const sheets = await getSheetsClient();
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

  const [cRes, sRes, aRes] = await Promise.all([
    sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: "'내담자'!A2:I",
    }),
    sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: "'코칭기록'!A2:G",
    }),
    sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: "'검사결과'!A2:F",
    }),
  ]);

  const sessMap: Record<string, CoachingSession[]> = {};
  for (const r of sRes.data.values || []) {
    const cid = r[1] || "";
    if (!sessMap[cid]) sessMap[cid] = [];
    sessMap[cid].push({
      id: r[0] || "",
      date: r[2] || "",
      sessionNumber: Number(r[3]) || 0,
      duration: Number(r[4]) || 50,
      content: r[5] || "",
      notes: r[6] || "",
    });
  }

  const assMap: Record<string, Assessment[]> = {};
  for (const r of aRes.data.values || []) {
    const cid = r[1] || "";
    if (!assMap[cid]) assMap[cid] = [];
    assMap[cid].push({
      id: r[0] || "",
      toolName: r[2] || "",
      date: r[3] || "",
      result: r[4] || "",
      notes: r[5] || "",
    });
  }

  return (cRes.data.values || []).map((r) => ({
    id: r[0] || "",
    name: r[1] || "",
    phone: r[2] || "",
    email: r[3] || "",
    birthYear: r[4] ? Number(r[4]) : null,
    gender: r[5] || "",
    program: r[6] || "",
    registeredAt: r[7] || "",
    notes: r[8] || "",
    sessions: sessMap[r[0]] || [],
    assessments: assMap[r[0]] || [],
  }));
}

async function writeSheets(clients: Client[]): Promise<void> {
  await ensureSheets();
  const sheets = await getSheetsClient();
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

  const cRows = clients.map((c) => [
    c.id,
    c.name,
    c.phone,
    c.email,
    c.birthYear?.toString() || "",
    c.gender,
    c.program,
    c.registeredAt,
    c.notes,
  ]);

  const sRows = clients.flatMap((c) =>
    c.sessions.map((s) => [
      s.id,
      c.id,
      s.date,
      s.sessionNumber.toString(),
      s.duration.toString(),
      s.content,
      s.notes,
    ])
  );

  const aRows = clients.flatMap((c) =>
    c.assessments.map((a) => [
      a.id,
      c.id,
      a.toolName,
      a.date,
      a.result,
      a.notes,
    ])
  );

  await Promise.all([
    sheets.spreadsheets.values.clear({
      spreadsheetId: id,
      range: "'내담자'!A2:I",
    }),
    sheets.spreadsheets.values.clear({
      spreadsheetId: id,
      range: "'코칭기록'!A2:G",
    }),
    sheets.spreadsheets.values.clear({
      spreadsheetId: id,
      range: "'검사결과'!A2:F",
    }),
  ]);

  const writes: Promise<unknown>[] = [];
  if (cRows.length > 0) {
    writes.push(
      sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: "'내담자'!A2",
        valueInputOption: "RAW",
        requestBody: { values: cRows },
      })
    );
  }
  if (sRows.length > 0) {
    writes.push(
      sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: "'코칭기록'!A2",
        valueInputOption: "RAW",
        requestBody: { values: sRows },
      })
    );
  }
  if (aRows.length > 0) {
    writes.push(
      sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: "'검사결과'!A2",
        valueInputOption: "RAW",
        requestBody: { values: aRows },
      })
    );
  }
  await Promise.all(writes);
}

// ─── Public API (with error handling) ────────────────────

export async function getClients(): Promise<Client[]> {
  if (!USE_SHEETS) return [];
  try {
    return await readSheets();
  } catch (err) {
    console.error("[store] Google Sheets 읽기 실패:", err);
    return [];
  }
}

export async function saveClients(clients: Client[]): Promise<void> {
  if (!USE_SHEETS) {
    console.warn("[store] Google Sheets 환경변수가 설정되지 않았습니다.");
    return;
  }
  try {
    await writeSheets(clients);
  } catch (err) {
    console.error("[store] Google Sheets 쓰기 실패:", err);
    throw new Error("데이터 저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
}

export async function getClient(
  id: string
): Promise<Client | undefined> {
  const clients = await getClients();
  return clients.find((c) => c.id === id);
}

export function generateId(): string {
  return (
    Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
  );
}
