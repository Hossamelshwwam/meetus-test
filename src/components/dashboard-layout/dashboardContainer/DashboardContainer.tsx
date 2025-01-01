"use client";
import store from "@/store/store";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import useWindowWidth from "@/utils/windowWidth";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import LoadingWholePage from "@/components/ui/LoadingWholePage";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  const width = useWindowWidth();
  const { data, status } = useSession();

  useEffect(() => {
    if (width < 1200) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <LoadingWholePage loading={status !== "authenticated"} />
      <Sidebar open={open} setOpen={setOpen} />
      <div
        style={{
          width: open ? (width > 992 ? "calc(100% - 256px)" : "100%") : "100%",
          transitionProperty: "width, margin",
        }}
        className={`${
          open ? "lg:ml-64 " : ""
        }  h-screen overflow-hidden relative duration-300`}
      >
        <Navbar
          setOpen={setOpen}
          open={open}
          user={{
            name: data?.user.name,
          }}
        />
        <div
          className="p-4 overflow-y-auto"
          style={{ height: "calc(100vh - 133px)" }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardContainer;
