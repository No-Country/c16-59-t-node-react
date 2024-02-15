import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { IconHuerta, Phone, QuestionMark, User } from "./";

export const NavBar = () => {
  return (
    <Navbar className="bg-principal">
      <NavbarBrand className="w-[50vw] justify-start items-start gap-2">
        <div className="w-6">
          <IconHuerta />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-inherit">La Huerta</p>
          <span className="text-xs italic font-medium">
            ...del campo a tu puerta.
          </span>
        </div>
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="w-[50vw] active:[&_svg]:stroke-black/25 active:[&_svg]:fill-black/10"
      >
        <button>
          <User />
        </button>
        <button>
          <QuestionMark />
        </button>
        <button>
          <Phone />
        </button>
        {/* <ThemeSwitcher /> */}
      </NavbarContent>
    </Navbar>
  );
};
