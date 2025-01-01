"use client";
import { Spinner } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const LoadingWholePage = ({ loading }: { loading: boolean }) => {
  const controlerLoading = useAnimationControls();

  useEffect(() => {
    if (!loading) {
      controlerLoading.start({ y: "-100%", transition: { duration: 0.3 } });
    }
  }, [controlerLoading, loading]);

  return (
    <motion.div
      initial={!loading ? { y: "-100%" } : { y: 0, display: "flex" }}
      animate={controlerLoading}
      className="absolute w-full h-full flex top-0 left-0 z-50 justify-center items-center bg-main"
    >
      <Spinner className="w-10 h-10" />
    </motion.div>
  );
};

export default LoadingWholePage;
