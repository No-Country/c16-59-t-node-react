import { Stripe, loadStripe } from "@stripe/stripe-js";

export const API_URL = process.env.DEPLOY_URL;
export const stripePromise = loadStripe(
  process.env.STRIPE_PUBLIC_KEY as string
) as Promise<Stripe>;

//Products
export const URL_API_PRODUCTS = `${API_URL}/products`;

//category
export const URL_API_FRUITS = `${API_URL}/products/category/fruit`;
export const URL_API_VEGETABLES = `${API_URL}/products/category/vegetable`;

export const URL_API_PROCESSEDFOODS = `${API_URL}/products/category/processed-food`;
