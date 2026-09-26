import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-700 bg-slate-900 p-6">
      <nav className="flex flex-col gap-3">
        <Link
          href="/"
          className="rounded-lg px-4 py-3 text-slate-200 hover:bg-purple-600 hover:text-white"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="rounded-lg px-4 py-3 text-slate-200 hover:bg-purple-600 hover:text-white"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="rounded-lg px-4 py-3 text-slate-200 hover:bg-purple-600 hover:text-white"
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
}