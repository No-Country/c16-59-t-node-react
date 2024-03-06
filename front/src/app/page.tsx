import { FreshProduceMessage, Hero, Menu, Products } from "./components";
import LoginForm from "./components/Forms/LogInForm/LogInForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <FreshProduceMessage/>
      <Menu/>
      <Products />
      <LoginForm/>
    </div>
  );
}
