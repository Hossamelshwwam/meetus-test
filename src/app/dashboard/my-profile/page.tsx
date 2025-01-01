import MyProfile from "@/components/my-profile/MyProfile";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  return <MyProfile />;
};

export default page;
