import { NextResponse } from "next/server";
import { stripeServer } from "@/app/lib/stripeConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, email } = body;

    const transformedItems = items.map((item: any) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    const session = await stripeServer.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_options: [
        {
          shipping_rate: "shr_1My1dOEfYxNbjr9ymfol5jXy",
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["GB", "US", "CA"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/products`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item: any) => item.image)),
      },
    });
    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
