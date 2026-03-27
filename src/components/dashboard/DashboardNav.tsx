"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { logout } from "@/app/login/actions";
import { LayoutDashboard, Users, LogOut, Home } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "대시보드",
    href: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    label: "내담자 관리",
    href: "/dashboard/clients",
    icon: Users,
    exact: false,
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-card border-b border-border-light sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5"
          >
            <Logo size={26} />
            <span className="font-heading font-bold text-text">
              ON-DO
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-pale text-primary font-medium tracking-wider uppercase">
              Coach
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-sm)] text-sm transition-colors ${
                    isActive
                      ? "bg-primary-pale text-primary font-medium"
                      : "text-text-muted hover:text-text hover:bg-bg"
                  }`}
                >
                  <Icon size={16} />
                  <span className="max-[640px]:hidden">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-text-light hover:text-text-muted transition-colors"
          >
            <Home size={13} />
            <span className="max-[640px]:hidden">홈페이지</span>
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] text-sm text-text-muted hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              <span className="max-[640px]:hidden">로그아웃</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
