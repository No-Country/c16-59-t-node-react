"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IconHuerta, Phone, QuestionMark, User } from "..";
import { NavContent, classNavBar, classNavBrand, separator } from "./className";

export const NavBar = () => {
  const router = useRouter();

  return (
    // revisar con inspeccion los componentes
    <Navbar className={classNavBar}>
      <NavbarBrand className={classNavBrand}>
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
      <div className={separator}/>
      <NavbarContent
        justify="end"
        className={NavContent}
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