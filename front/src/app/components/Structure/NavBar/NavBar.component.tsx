"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IconHuerta,
  ImageLoginTemp,
  ModalBtn,
  Phone,
  QuestionMark,
  User,
  WelcomeUserLogin,
} from "../..";
import LoginForm from "../../Forms/LogInForm/LogInForm";
import { NavContent, classNavBar, classNavBrand, separator } from "./className";
import { useUser } from "@/app/hooks";

export const NavBar = () => {
  const router = useRouter();
  const {
    user: { token },
  } = useUser();

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
      {token && <WelcomeUserLogin />}
      <NavbarContent justify="end" className={NavContent}>
        <ModalBtn btnContent={token ? <ImageLoginTemp /> : <User />}>
          <LoginForm />
        </ModalBtn>
        <ModalBtn btnContent={<QuestionMark />}>{"QuestionMark"}</ModalBtn>
        <ModalBtn btnContent={<Phone />}>{"Phone"}</ModalBtn>
        {/* <ThemeSwitcher /> */}
      </NavbarContent>
    </Navbar>
  );
};
