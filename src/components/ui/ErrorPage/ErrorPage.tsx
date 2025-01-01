"use client";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-n-main">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-n-black md:text-4xl">
              Something&apos;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-n-black/80">
              Sorry, there was an error loading the data. Please try again later
              or check your internet connection. You can also refresh the page
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex capitalize text-n-white bg-n-black hover:bg-n-main font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 my-4"
            >
              Refresh the page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
