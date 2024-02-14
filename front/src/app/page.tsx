import { Hero, Menu, NavBar, Products } from "./components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto py-10">
        <Hero />
        <div className="h-[150px] flex flex-col items-center justify-center gap-4  text-secundario ">
          <h3 className="font-bold text-2xl">
            Productos frescos de manos campesinas
          </h3>
          <h5 className="font-medium text-lg">
            Consume producto fresco y local
          </h5>
        </div>
        <Menu />
        <Products />
      </div>
    </main>
  );
}
