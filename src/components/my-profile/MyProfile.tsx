"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div>
      <p>
        <span className="text-lg font-semibold">name :</span>
        {user.name}
      </p>
      <p>
        <span className="text-lg font-semibold">id :</span>
        {user.id}
      </p>
    </div>
  );
};

export default MyProfile;
