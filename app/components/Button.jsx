export default function Button({ children, variant = "primary" }) {
  const buttonStyle =
    variant === "secondary"
      ? "border border-[#25C2FF] bg-transparent text-[#25C2FF] hover:bg-[#172A45]"
      : "bg-[#25C2FF] text-slate-950 hover:bg-[#52D0FF]";

  return (
    <button
      type="button"
      className={`rounded-lg px-5 py-2.5 font-semibold transition ${buttonStyle}`}
    >
      {children}
    </button>
  );
}