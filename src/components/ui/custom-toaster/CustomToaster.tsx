import React from "react";
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "",
        style: {
          border: "1px solid var(--n-white)",
          width: "500px",
          color: "var(--n-black)",
          textTransform: "capitalize",
        },
      }}
    />
  );
};

export default CustomToaster;
