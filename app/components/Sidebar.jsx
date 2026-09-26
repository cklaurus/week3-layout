"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `rounded-lg px-4 py-3 text-slate-200 transition hover:bg-[#172A45] ${
      pathname === path ? "bg-[#172A45] text-[#25C2FF]" : ""
    }`;

  return (
    <aside className="w-64 border-r border-slate-700 bg-slate-900 p-6">
      <nav className="flex flex-col gap-3">
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>

        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>

        <Link href="/contact" className={linkStyle("/contact")}>
          Contact
        </Link>
      </nav>
    </aside>
  );
}