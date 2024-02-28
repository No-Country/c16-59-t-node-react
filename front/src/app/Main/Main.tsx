import { ReactNode } from "react";
import { mainClass } from "./className";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className={mainClass}>{children}</main>;
};
