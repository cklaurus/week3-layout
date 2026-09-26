export default function Button({ children, variant = "primary" }) {
  const buttonStyle =
    variant === "secondary"
      ? "border border-purple-400 bg-transparent text-purple-300 hover:bg-purple-400/10"
      : "bg-purple-600 text-white hover:bg-purple-500";

  return (
    <button
      type="button"
      className={`rounded-lg px-5 py-2.5 font-semibold transition ${buttonStyle}`}
    >
      {children}
    </button>
  );
}
