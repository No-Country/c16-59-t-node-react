import { IconHuerta } from "@/app/components";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLIC_KEY as string
) as Promise<Stripe>;

export const ModalOpenPayment = ({ isOpen }: { isOpen: boolean }) => {
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create a checkout session
    const checkoutSession = await fetch(
      "https://amazon-clone-lags2022.vercel.app/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: "123",
              price: 2000,
              image:
                "https://res.cloudinary.com/dnautzk6f/image/upload/v1708368602/br7oaeocwvl0htipd8dq.png",
              title: "fuck",
              description: "lorem ipsum",
              category: "lorem",
              rating: 4,
              hasPrime: true,
            },
          ],
          email: "luis1@gmail.com",
        }),
      }
    );

    const checkout = await checkoutSession.json();

    //redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkout.data.id,
    });

    if (result.error) alert(result.error.message);
    return result;
  };

  useEffect(() => {
    createCheckoutSession();
  }, []);

  return (
    <Modal
      backdrop={"opaque"}
      isOpen={isOpen}
      placement={"center"}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton
      radius="none"
      classNames={{
        body: "flex flex-col justify-center items-center gap-0 m-auto pb-20 w-[cal(100vw - 10rem)]",
        header: "bg-primary-yellow",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <div className="[&_svg]:size-60">
                <IconHuerta />
              </div>
              <p>Estás a un paso de finalizar tu compra...</p>
              <p className="font-bold">No cierres esta página.</p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
