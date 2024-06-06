"use client";
import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { LoginFormDemo } from "@/components/LoginFormDemo";
import { motion } from "framer-motion";
import { FC } from "react";

const Login: FC = () => {
  return (
    <div className="flex h-screen bg-[#191919] text-white">
      <div className="flex items-center justify-center bg-black w-[70%]">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Why should deciding/creating/choosing/designing your timetable be
              a burden ?
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Check us out !
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
      <LoginFormDemo />
    </div>
  );
};

export default Login;
