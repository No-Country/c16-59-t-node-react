import { useOrder } from "@/app/hooks";
import { RenderAccordionItem } from "../../products/quantity/components/RenderAccordionItem.component";

export const OrderResume = () => {
  const { order } = useOrder();

  return (
    <>
      <div className="m-auto w-full grid grid-cols-[auto_1fr_auto_auto] justify-center items-center gap-x-4 gap-y-2 ">
        <p className="col-start-3 font-semibold text-xs md:text-base">
          Cantidades
        </p>
        <p className="col-start-4 font-semibold text-xs md:text-base">
          SubTotal
        </p>
        {/* <p className="col-start-5"></p> */}
        {order.products.map(
          ({
            productId,
            name,
            image,
            salesPresentation,
            priceByUnit,
            quantity,
            subTotal,
          }) => (
            <RenderAccordionItem
              key={productId}
              productId={productId}
              name={name}
              image={image}
              priceByUnit={priceByUnit}
              salesPresentation={salesPresentation}
              quantity={quantity}
              subTotal={subTotal}
              readOnly={true}
            />
          )
        )}
        <p className="col-start-2 text-xs md:text-base">Costo de Envío</p>
        <p className="col-start-4 pr-4 text-xs md:text-base text-right">
          $ {order.payment}
        </p>

        <div className="border-t border-gray-200 col-span-4" />

        <div className="col-start-3 col-span-2 flex gap-x-4 items-center border border-gray-400 pr-4">
          <div className="col-start-3 m-auto">
            <p className="text-center font-semibold text-xs md:text-base">
              Total
            </p>
          </div>
          <p className="col-start-4 font-bold text-xs md:text-base">
            $ {order.total}
          </p>
        </div>

        <div className="col-start-1 col-span-4 border border-gray-200 p-4">
          <p className="text-start font-semibold text-xs md:text-base">
            Notas del pedido:
          </p>
          <p className="text-xs md:text-base">{order.notes}</p>
        </div>
      </div>
    </>
  );
};
