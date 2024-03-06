import { Statement, Title } from "@/app/components";
import SubscriptionsContainer from "../../components/Subscriptions/SubcriptionsContainer";
import { data } from "../../data/subscriptionOpts";
export default function SubscriptionsPage() {
  return (
    <div>
      <Title>La Huerta Box</Title>
      <Statement>Escoge la suscripción que se adapte a tus necesidades:</Statement>
      <SubscriptionsContainer options={data}/>
    </div>
  );
}
