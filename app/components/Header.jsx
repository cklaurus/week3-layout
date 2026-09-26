import Button from "./Button";

export default function Header() {
  return (
    <header className="flex h-24 items-center justify-between border-b border-slate-700 bg-slate-950 px-8">
      <h1 className="text-2xl font-bold text-white">
        Pixel <span className="text-[#25C2FF]">Peak</span>
      </h1>

      <div className="flex items-center gap-3">
        <Button variant="secondary">Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
}
