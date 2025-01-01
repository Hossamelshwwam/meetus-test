"use client";
import { signOut } from "next-auth/react";
import React from "react";
import LoadingWholePage from "../ui/LoadingWholePage";

const SignOut = () => {
  signOut({ redirect: true, callbackUrl: "/" });
  return <LoadingWholePage loading />;
};

export default SignOut;
