"use client";

import { ReactNode, useEffect } from "react";
import { mainClass } from "./className";
import { useUser } from "@/app/hooks";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  const { getTokenUser } = useUser();

  useEffect(() => {
    getTokenUser();
  }, []);

  return <main className={mainClass}>{children}</main>;
};
