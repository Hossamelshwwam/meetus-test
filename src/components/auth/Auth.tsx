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
    <div className="bg-n-gray lg:h-screen min-h-screen overflow-hidden flex justify-center items-center relative">
      <div className="relative z-10 w-full lg:h-[calc(100vh-20px)] lg:my-0 lg:py-0 py-5 my-5 sm:mx-20 mx-5 bg-white/30 sm:px-10 px-2 backdrop-blur-xl  border-n-white border-2 rounded-xl flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-20 gap-10">
        <div className="mx-5">
          <div className="text-center mb-5">
            <h1 className="xl:text-[56px] text-4xl mb-5">Welcome back</h1>
            <p className="text-gray-800 max-w-[35ch]">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>
          </div>
          <ProviderWrapper>
            <FormInputs />
          </ProviderWrapper>
        </div>
        <div className="mx-5 w-fit">
          <div className="lg:mb-0 mb-5">
            <Image
              src={image}
              alt="image alt"
              width={500}
              className=" lg:w-[500px] md:w-[250px] w-[200px]"
            />
          </div>
          <div>
            <Image
              src={logo}
              alt="logo alt"
              width={300}
              className="mx-auto lg:mr-10 lg:w-[300px] md:w-[200px] w-[150px]"
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
