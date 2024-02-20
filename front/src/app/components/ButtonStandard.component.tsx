"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface ButtonStandardProps {
  children: React.ReactNode;
  route?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export const ButtonStandard: React.FC<ButtonStandardProps> = ({
  children,
  route,
  primary,
  secondary,
  tertiary,
}) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(
        "btn rounded-none font-bold",
        primary && "bg-primary-yellow",
        secondary && "bg-secondary-orange",
        tertiary && "bg-tertiary-green"
      )}
      onClick={() => route && router.push(route)}
    >
      {children}
    </Button>
  );
};
