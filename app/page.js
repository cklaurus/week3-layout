import Button from "./components/Button";

export default function Home() {
  return (
    <section className="flex min-h-full items-center justify-center">
      <div className="max-w-3xl text-center">
        <p className="mb-4 font-semibold uppercase tracking-widest text-purple-400">
          Welcome to Pixel Peak
        </p>

        <h2 className="mb-6 text-5xl font-bold leading-tight">
          Your next adventure starts here
        </h2>

        <p className="mb-8 text-lg leading-8 text-slate-300">
          Join a welcoming gaming community, meet new players, and explore
          unforgettable worlds together.
        </p>

        <Button>Join the Adventure</Button>
      </div>
    </section>
  );
}