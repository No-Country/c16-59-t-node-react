import { useOrder } from "@/app/hooks";
import { ProductData } from "@/app/interfaces/context";
import { Category } from "@/app/interfaces/products";

interface SelectionProductProps {
  children: React.ReactNode;
  productId: string;
  image: string;
  name: string;
  salesPresentation: string;
  price: number;
  category: Category;
}

export const SelectionProduct: React.FC<SelectionProductProps> = ({
  children,
  productId,
  image,
  name,
  salesPresentation,
  price,
  category,
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
      price,
      category,
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
          checked={order.products.some(({ productId: id }) => id === productId)}
        />
        <div className="peer-checked:border-secondary-orange peer-checked:shadow-secondary-orange/10 peer-checked:text-secondary-orange peer-checked:before:border-secondary-orange peer-checked:before:bg-secondary-orange peer-checked:before:opacity-100 peer-checked:before:scale-100 peer-checked:before:content-['✓'] flex flex-col items-center justify-center w-fit h-fit rounded-lg shadow-lg transition-all duration-200 cursor-pointer relative border-slate-300 border-[3px] bg-white before:absolute before:w-10 before:h-10 before:border-[3px]  before:rounded-full before:top-0 before:left-0 before:opacity-0 before:transition-transform before:scale-0 before:text-white before:text-xs before:flex before:items-center before:justify-center hover:border-secondary-orange hover:before:scale-100 hover:before:opacity-100 peer-checked:before:z-10 overflow-hidden before:translate-x-1/3 before:translate-y-1/3 before:md:translate-x-1/2 before:md:translate-y-1/2 before:lg:translate-x-2/3 before:lg:translate-y-2/3">
          <div className="transition-all duration-100 relative text-black text-center">
            {children}
          </div>
        </div>
      </label>
    </div>
  );
};
