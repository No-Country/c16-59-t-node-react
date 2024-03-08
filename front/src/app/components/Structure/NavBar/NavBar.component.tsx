"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconHuerta, ModalBtn, Phone, QuestionMark, User } from "../..";
import LoginForm from "../../Forms/LogInForm/LogInForm";
import { NavContent, classNavBar, classNavBrand, separator } from "./className";

export const NavBar = () => {
  const router = useRouter();

  const [show, setShow] = useState(() => {
    if (globalThis.localStorage) {
      return !globalThis.localStorage.getItem("token");
    }
    return true;
  });

  // const handleClick = () => {
  //   !show ? removeToken() : setToken();
  //   setShow(!show);
  // };

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
      <div className={separator} />
      <NavbarContent justify="end" className={NavContent}>
        {/* <button onClick={handleClick}>
          <User />
        </button> */}
        <ModalBtn btnContent={<LoginForm />}>
          <User />
        </ModalBtn>
        <ModalBtn btnContent={"QuestionMark"}>
          <QuestionMark />
        </ModalBtn>
        <ModalBtn btnContent={"Phone"}>
          <Phone />
        </ModalBtn>
        {/* <ThemeSwitcher /> */}
      </NavbarContent>
    </Navbar>
  );
};
