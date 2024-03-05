import { Statement, SubscriptionsContainer, Title } from "@/app/components";
import { data } from "../../data/subscriptionOpts";
export default function SubscriptionsPage() {
  return (
    <div>
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>La Huerta Box</Title>
      <Statement>Escoge la suscripción que se adapte a tus necesidades:</Statement>
      <SubscriptionsContainer options={data}/>
    </div>
  );
}
