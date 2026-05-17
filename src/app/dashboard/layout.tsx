import type { Metadata } from "next";
import DashboardNav from "@/components/dashboard/DashboardNav";

export const metadata: Metadata = {
  title: "코치 대시보드 — 온도 ON-DO",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-bg">
      <DashboardNav />
      <main className="max-w-[1200px] mx-auto px-4 py-5 sm:px-6 sm:py-8">
        {children}
      </main>
    </div>
  );
}
