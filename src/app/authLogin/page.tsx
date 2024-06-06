"use client";
import { LoginFormDemo } from "@/components/LoginFormDemo";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import ThemeSwitch from "@/components/ThemeButton";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import RotateText from "@/components/ui/RotateText";
import { motion } from "framer-motion";
import { FC } from "react";

const Login: FC = () => {
  return (
    <div className="flex h-screen w-full bg-[#191919] text-white">
      <div className="flex items-center justify-center dark:bg-black w-[70%] h-full ">
        <div className="w-full">
          <AuroraBackground className="h-screen">
            {/* <div className="absolute top-0 -right-4 w-72 h-72 bg-[#673f1e] rounded-full mix-blend-multiply filter "></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#f4a768d5] rounded-full mix-blend-darken filter opacity-100"></div>
          <div className="absolute -top-10 -right-2 w-72 h-72 bg-[#f4a768d5] rounded-full mix-blend-soft-light filter  opacity-100"></div> */}
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
              <div className="text-3xl md:text-7xl font-bold dark:text-white text-center flex flex-col ">
                <div className="flex flex-row items-center justify-center gap-x-5 transition-all duration-100 ease-in-out">
                  <p>Why</p>
                  <p>should</p>
                  <RotateText />
                </div>
                <div className="pt-3">your timetable be a burden ?</div>
                {/* <div className="pt-3"> </div> */}
              </div>
              <div className="font-extralight text-base text-center md:text-4xl dark:text-neutral-200 py-4">
                FFCS Hero has got you covered !
              </div>
            </motion.div>
          </AuroraBackground>
        </div>
      </div>
      <div className="z-10 h-full w-[30%] flex items-center justify-center flex-col">
        <LoginFormDemo />
        {/* <ThemeSwitch /> */}
      </div>
    </div>
  );
};

export default Login;
