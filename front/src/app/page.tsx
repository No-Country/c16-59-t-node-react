import { Hero, Menu, Products } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-[50px] sm:h-[80px] lg:h-[100px] flex flex-col items-center justify-center gap-2 text-secondary-orange m-auto">
        <h3 className="font-bold text-sm sm:text-xl lg:text-2xl">
          Productos frescos de manos campesinas
        </h3>
        <h5 className="font-medium text-xs sm:text-base lg:text-lg">
          Consume producto fresco y local
        </h5>
      </div>
      <Menu />
      <Products />
    </>
  );
}
