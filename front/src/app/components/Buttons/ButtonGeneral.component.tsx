import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Button } from "@nextui-org/react";

interface ButtonGeneralProps {
  bgColor: "primary-yellow" | "secondary-orange" | "tertiary-green";
  children: React.ReactNode;
  route?: string;
  addFunc?: () => void;
  disabled?: boolean;
  addClassName?: string;
  type?: "submit" | "reset" | "button";
}

export const ButtonGeneral: React.FC<ButtonGeneralProps> = ({
  children,
  route,
  bgColor,
  addFunc,
  disabled,
  addClassName,
  type,
}) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(
        "btn rounded-none font-bold sm:text-[0.8rem] text-wrap h-[2.2781rem] w-[12.88rem] lg:w-[20rem] lg:text-[1rem]",
        bgColor === "primary-yellow" && "bg-primary-yellow",
        bgColor === "secondary-orange" && "bg-secondary-orange",
        bgColor === "tertiary-green" && "bg-tertiary-green",
        disabled && "bg-gray-300 cursor-not-allowed",
        addClassName
      )}
      onClick={() => {
        addFunc && addFunc();
        route && router.push(route);
      }}
      disabled={disabled}
      type={type}
    >
      {children}
    </Button>
  );
};
