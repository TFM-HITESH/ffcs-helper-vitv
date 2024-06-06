"use client";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import ThemeSwitch from "@/components/ThemeButton";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { motion } from "framer-motion";
import { FC } from "react";

const Signup: FC = () => {
  return (
    <div className="flex h-screen bg-[#191919] text-white">
      <div className="flex items-center justify-center dark:bg-black w-[70%]">
        <AuroraBackground>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#673f1e] rounded-full mix-blend-multiply filter "></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#f4a768d5] rounded-full mix-blend-darken filter opacity-100"></div>
          <div className="absolute -top-10 -right-2 w-72 h-72 bg-[#f4a768d5] rounded-full mix-blend-soft-light filter  opacity-100"></div>
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
              Why should creating your timetable be a burden ?
            </div>
            <div className="font-extralight text-base text-center md:text-4xl dark:text-neutral-200 py-4">
              FFCS Hero has got you covered !
            </div>
            {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2" onClick={}>
              Check us out!
            </button> */}
          </motion.div>
        </AuroraBackground>
        {/* <div className="p-8">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 flex items-center justify-center rounded-lg">
              <img src="/imageToAdd.png" alt="image" className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold">Welcome to FFCSHelper VITV.</h1>
          </div>
        </div> */}
      </div>
      <div className="z-10">
        <SignupFormDemo />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Signup;
