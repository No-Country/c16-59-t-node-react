"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { IconHuerta, Phone, QuestionMark, User } from "./";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();

  return (
    // revisar con inspeccion los componentes
    <Navbar className="bg-primary-yellow *:max-w-screen-2xl">
      <NavbarBrand className="w-[50vw] justify-start items-start gap-2">
        <button
          onClick={() => router.push("/")}
          className="w-6 hover:scale-105 transition duration-1000 ease-in-out"
        >
          <IconHuerta />
        </button>
        <div className="flex flex-col">
          <p className="font-bold text-black">La Huerta</p>
          <span className="text-xs italic font-medium text-black">
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
