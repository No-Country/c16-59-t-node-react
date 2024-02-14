import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { IconHuerta, Phone, QuestionMark, ThemeSwitcher, User } from "./";

export const NavBar = () => {
  return (
    <Navbar className="w-full max-w-7xl mx-auto bg-principal">
      <NavbarBrand className="flex justify-start items-start gap-2">
        <div className="w-4 md:w-6">
          <IconHuerta />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-inherit">La Huerta</p>
          <span className="text-xs italic font-medium">
            ...del campo a tu puerta.
          </span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <User />
        <QuestionMark />
        <Phone />
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
};
