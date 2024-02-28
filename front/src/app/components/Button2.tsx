"use client";

import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface ButtonStandardProps {
  children: React.ReactNode;
  route?: string;
  bgColor: "primary-yellow" | "secondary-orange" | "tertiary-green"
}

export const Button2: React.FC<ButtonStandardProps> = ({
  children,
  route,
  bgColor
}) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(
        "btn rounded-none font-bold",
        `bg-${bgColor}`,
        "sm:text-[0.6rem] text-wrap h-[2.2781rem] w-[12.88rem]"
      )}
      onClick={() => route && router.push(route)}
    >
      {children}
    </Button>
  );
};
