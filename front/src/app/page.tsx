import { Hero, Menu, Products } from "./components";
import FreshProduceMessage from "./components/FreshProduceMessage/FreshProduceMessage";

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
