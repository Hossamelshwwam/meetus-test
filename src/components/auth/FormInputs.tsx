"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Inputs from "@/components/ui/form/Inputs";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { somethingWrong } from "@/type/global";
import CustomToaster from "@/components/ui/custom-toaster/CustomToaster";
import { useRouter } from "next/navigation";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useSignInMutation } from "@/store/api/signInApi";

const FormInputs = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
  });

  const initialValues = {
    email: "",
    password: "",
    isEmployee: true,
  };

  const [logIn] = useSignInMutation();

  const route = useRouter();

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const toastId = toast.loading("loading....");
      try {
        const result = (await logIn(values).unwrap()) as any;
        localStorage.setItem("token", result.token);
        await signIn("credentials", {
          body: JSON.stringify({ token: result.token, ...result.userInfo }),
          redirect: false,
        });
        route.push("/dashboard/my-profile");
        toast.dismiss(toastId);
        toast.success("login successful");
      } catch (error: any) {
        toast.dismiss(toastId);
        resetForm();
        if (error.data) {
          toast.error(error.data.message);
        } else {
          toast.error(somethingWrong);
        }
      }
    },
  });

  return (
    <form action={() => handleSubmit()} className="w-full">
      <div className="grid grid-cols-2 mb-5">
        <Inputs
          handlerChange={handleChange}
          name="email"
          type="email"
          value={values.email}
          InputClassName="input"
          error={errors.email}
          placeholder="email"
          icon={faEnvelope}
        />
        <Inputs
          handlerChange={handleChange}
          name="password"
          type="password"
          value={values.password}
          InputClassName="input"
          error={errors.password}
          placeholder="password"
          icon={faLock}
        />
      </div>
      <button
        disabled={Object.entries(errors).length > 0}
        className="col-span-2 w-full py-3 text-n-white text-center bg-main rounded-lg hover:bg-sec duration-150"
      >
        Login
      </button>
      <CustomToaster />
    </form>
  );
};

export default FormInputs;
