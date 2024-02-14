import { Hero, NavBar } from "./components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto py-10">
        <Hero />
      </div>
    </main>
  );
}
