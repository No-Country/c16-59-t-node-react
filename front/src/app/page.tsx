import { Hero, Menu, Products } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center justify-center text-secondary-orange m-auto">
        <h3 className="font-bold text-xs sm:text-sm lg:text-base lg:gap-1">
          Productos frescos de manos campesinas
        </h3>
        <h5 className="font-medium text-xs sm:text-sm lg:text-base">
          Consume producto fresco y local
        </h5>
      </div>
      <Menu />
      <Products />
    </>
  );
}
