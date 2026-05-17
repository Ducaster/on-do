"use client";

import { useRef, useState } from "react";
import DrawingCanvas from "@/components/assessments/DrawingCanvas";
import { submitDrawingTest } from "../actions";

interface DrawingTestFormProps {
  clientId: string;
  slug: string;
  template?: "six-shapes" | "life-graph";
}

export default function DrawingTestForm({ clientId, slug, template }: DrawingTestFormProps) {
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submitLockRef = useRef(false);

  async function handleExport(dataUrl: string) {
    if (submitting || submitLockRef.current) return;
    submitLockRef.current = true;
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.set("clientId", clientId);
      formData.set("slug", slug);
      formData.set("imageData", dataUrl);
      formData.set("notes", notes);

      await submitDrawingTest(formData);
    } catch (error) {
      submitLockRef.current = false;
      setSubmitting(false);
      throw error;
    }
  }

  return (
    <div className="space-y-4">
      <DrawingCanvas
        template={template}
        onExport={handleExport}
        submitting={submitting}
      />

      {submitting && (
        <div className="text-center py-4">
          <p className="text-sm text-text-muted animate-pulse">저장 중...</p>
        </div>
      )}

      <div>
        <label className="block text-xs text-text-muted mb-1">메모 (선택)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          disabled={submitting}
          rows={2}
          placeholder="관찰 소견이나 메모를 남겨주세요"
          className="w-full px-3 py-2 text-sm rounded-[var(--radius-sm)] border border-border-light bg-bg focus:outline-none focus:border-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
