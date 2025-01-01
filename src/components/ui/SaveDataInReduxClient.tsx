"use client";
import { setUser } from "@/store/slice/userSlice";

import { useDispatch } from "react-redux";

const SaveDataInReduxClient = ({ data }: { data: any }) => {
  const dispatch = useDispatch();
  dispatch(setUser({ user: { ...data } }));

  return null;
};

export default SaveDataInReduxClient;
