"use client";
import React from "react";
import FormInputs from "./FormInputs";
import ProviderWrapper from "@/components/ui/ProviderWrapper";
import Image from "next/image";
import image from "@/../public/assests/images/meetusvr.png";
import logo from "@/../public/assests/images/logo.png";
import Svg1 from "@/../public/assests/svg/Ellipse1";
import Svg2 from "@/../public/assests/svg/Ellipse2";

const Auth = () => {
  return (
    <div className="bg-n-gray h-screen overflow-hidden flex justify-center items-center relative">
      <div className="relative z-10 w-full h-[calc(100vh-20px)] mx-20 bg-white/30 px-10 backdrop-blur-xl  border-n-white border-2 rounded-xl flex justify-between items-center gap-20">
        <div className="mx-5">
          <div className="text-center mb-5">
            <h1 className="text-[56px]">Welcome back</h1>
            <p className="text-gray-800 max-w-[35ch]">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>
          </div>
          <ProviderWrapper>
            <FormInputs />
          </ProviderWrapper>
        </div>
        <div className="mx-5">
          <div className="mb-2">
            <Image src={image} alt="image alt" width={500} />
          </div>
          <div>
            <Image
              src={logo}
              alt="logo alt"
              width={250}
              className="ml-auto mr-5"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <Svg1 />
      </div>
      <div className="absolute bottom-0 right-0">
        <Svg2 />
      </div>
    </div>
  );
};

export default Auth;
