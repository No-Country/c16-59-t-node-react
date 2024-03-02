import { useOrder } from "@/app/hooks";
import { RenderAccordionItem } from "../../products/quantity/components/RenderAccordionItem.component";
import { Button2 } from "@/app/components/Button2";

export const OrderResume = () => {
  const { order } = useOrder();

  return (
    <>
      <div className="m-auto w-full grid grid-cols-[auto_1fr_auto_auto] justify-center items-center gap-x-4 gap-y-2 ">
        <p className="col-start-3">Cantidades</p>
        <p className="col-start-4">Precio</p>
        {order.products.map(
          ({
            productId,
            name,
            image,
            salesPresentation,
            priceByUnit,
            quantity,
            totalByUnit,
          }) => (
            <RenderAccordionItem
              key={productId}
              productId={productId}
              name={name}
              image={image}
              priceByUnit={priceByUnit}
              salesPresentation={salesPresentation}
              quantity={quantity}
              totalByUnit={totalByUnit}
              readOnly={true}
            />
          )
        )}
        <p className="col-start-2">Costo de Envío</p>
        <p className="col-start-4 pr-4">$ {order.payment}</p>

        <div className="border-t border-gray-200 col-span-4" />

        <div className="col-start-3 col-span-2 flex gap-x-4 items-center border border-gray-200 pr-4">
          <div className="col-start-3 m-auto">
            <p className="text-center">Total</p>
          </div>
          <p className="col-start-4">$ {order.total}</p>
        </div>

        <div className="col-start-1 col-span-4 border border-gray-200 p-4">
          <p className="text-start font-semibold">Notas del pedido:</p>
          <p>{order.notes}</p>
        </div>
      </div>
      <div className="w-full m-auto flex justify-center items-center">
        <Button2 bgColor="primary-yellow" route="/products">
          Agregar mas productos
        </Button2>
      </div>
    </>
  );
};
