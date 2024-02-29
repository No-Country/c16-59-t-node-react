import { Title } from "../components";
import { Statement } from "./components";
import SubscriptionsContainer from "./containers/SubcriptionsContainer";
import { data } from "./utils/subscriptionOpts";
export default function SubscriptionsPage() {
  return (
    <div>
      <Title>La Huerta Box</Title>
      <Statement>Escoge la suscripción que se adapte a tus necesidades:</Statement>
      <SubscriptionsContainer options={data}/>
    </div>
  );
}
