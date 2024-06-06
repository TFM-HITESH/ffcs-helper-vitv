"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import Link from "next/link";
import ThemeSwitch from "./ThemeButton";

export function LoginFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="h-screen w-full rounded-none flex flex-col justify-center p-4 md:p-8 shadow-input bg-white dark:bg-[#191919] border-0 border-transparent">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        Login
        <ThemeSwitch />
      </h2>
      <div className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <div className="flex flex-row mt-3">
          <div className="">
            New to FFCS Hero ?{" "}
            <Link href="/authSignup">
              <span className="text-blue-500 dark:text-blue-700  font-bold hover:underline underline-offset-4 transition-all duration-150 ease-in-out">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder=""
            type="email"
            className="rounded-[0.5rem]"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder=""
            type="password"
            className="rounded-[0.5rem]"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-50 dark:to-zinc-100 to-neutral-600 dark:bg-zinc-50 w-full text-white dark:text-black rounded-[0.5rem] h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex flex-row justify-center items-center gap-1.5 hover:gap-3 dark:hover:gap-3 transition-all duration-100 ease-in-out"
          type="submit"
        >
          <p>Login</p> <p>&rarr;</p>
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-[0.5rem] h-10 font-medium shadow-input bg-size-200 bg-pos-0 dark:bg-pos-0 hover:bg-pos-100 dark:hover:bg-pos-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] bg-gradient-to-r from-black/15 via-gray-100 to-purple-700/30 dark:bg-gradient-to-r dark:from-black dark:via-black dark:to-purple-950 transition-all duration-300 ease-in-out"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            {/* <BottomGradient /> */}
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-[0.5rem] h-10 font-medium shadow-input bg-size-200 bg-pos-0 dark:bg-pos-0 hover:bg-pos-100 dark:hover:bg-pos-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] bg-gradient-to-r from-gray-100 via-red-300 to-blue-300 dark:bg-gradient-to-r dark:from-zinc-800 dark:via-red-500 dark:to-blue-500 transition-all duration-300 ease-in-out"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            {/* <BottomGradient /> */}
          </button>
        </div>
      </form>
      <div className="-mt-3 flex justify-end">
        <Link
          href="/"
          className="text-left text-neutral-800 dark:text-neutral-200 text-sm hover:gap-3 gap-2 flex flex-row transition-all duration-100 ease-in-out"
        >
          <span>&larr;</span>{" "}
          <p className="hover:underline underline-offset-4">Home</p>
        </Link>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[4px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[4px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
