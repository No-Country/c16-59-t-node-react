import { FreshProduceMessage, Hero, Menu, Products } from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <FreshProduceMessage/>
      <Menu />
      <Products />
    </div>
  );
}
