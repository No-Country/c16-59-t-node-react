import { useOrder } from "@/app/hooks";
import { ProductData } from "@/app/interfaces/context";
import { Category } from "@/app/interfaces/products";

interface SelectionProductProps {
  children: React.ReactNode;
  productId: string;
  image: string;
  name: string;
  salesPresentation: string;
  priceByUnit: number;
  category: Category;
  statusChecked: boolean;
}

export const SelectionProduct: React.FC<SelectionProductProps> = ({
  children,
  productId,
  image,
  name,
  salesPresentation,
  priceByUnit,
  category,
  statusChecked,
}) => {
  const { order, addProduct, removeProduct } = useOrder();

  const handleChange = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const product: ProductData = {
      productId,
      image,
      name,
      salesPresentation,
      priceByUnit,
      category,
      quantity: 1,
      subTotal: priceByUnit,
    };

    if (checked) {
      addProduct(product);
    } else {
      removeProduct(productId);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-11/12 mx-auto select-none gap-2 max-w-[500px]">
      <label className="text-slate-400">
        <input
          type="checkbox"
          className="h-[1px] opacity-0 overflow-hidden absolute whitespace-nowrap w-[1px] peer"
          onChange={handleChange}
          checked={statusChecked}
        />
        {/* selection-mode esta en el globalcss */}
        <div className="selection-mode">
          <div className="transition-all duration-100 relative text-black text-center">
            {children}
          </div>
        </div>
      </label>
    </div>
  );
};
