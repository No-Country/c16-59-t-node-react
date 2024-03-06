import { STRIPE_PROMISE_CLIENT, STRIPE_SERVER } from "@/constants/data";
import { Stripe as StripeType, loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

export const stripePromiseClient = loadStripe(
  STRIPE_PROMISE_CLIENT as string
) as Promise<StripeType>;

export const stripeServer = new Stripe(STRIPE_SERVER as string);
