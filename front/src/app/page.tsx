import { Hero, Menu, Products } from "./components";
import FreshProduceMessage from "./components/Home/FreshProduceMessage/FreshProduceMessage";

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
