"use client";

import React, { useEffect, useState } from "react";

import { Sun, Moon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function ThemeSwitch() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storage = window.localStorage;
    const themeSaved = storage.getItem("Local-theme");

    if (!themeSaved && theme === "system") {
      if (systemTheme === "dark") {
        setIsDark(true);
      } else if (systemTheme === "light") {
        setIsDark(false);
      }
    } else {
      themeSaved === "true" ? setIsDark(true) : setIsDark(false);
    }
  }, [systemTheme, theme]);

  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
  }, [isDark, setTheme]);

  const loginThemeButton = ["/authLogin", "/authSignup"];
  const pathname = usePathname();

  if (loginThemeButton.includes(pathname)) {
    return (
      <div className="absolute top-5 right-5">
        <button
          className="p-1 border border-1 rounded-md dark:hover:bg-white/10 hover:bg-black/10 transition-all duration-200 ease-in-out"
          onClick={() => {
            setIsDark(!isDark);
            window.localStorage.setItem("Local-theme", `${!isDark}`);
          }}
        >
          {!isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    );
  }

  return (
    <div className="">
      <button
        className="p-1 border border-1 rounded-md dark:hover:bg-white/10 hover:bg-black/10 transition-all duration-200 ease-in-out"
        onClick={() => {
          setIsDark(!isDark);
          window.localStorage.setItem("Local-theme", `${!isDark}`);
        }}
      >
        {!isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
