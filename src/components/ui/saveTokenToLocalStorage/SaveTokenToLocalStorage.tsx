"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function SaveTokenToLocalStorage() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.token) {
      localStorage.setItem("token", session.user.token);
    }
  }, [session]);

  return null; 
}
