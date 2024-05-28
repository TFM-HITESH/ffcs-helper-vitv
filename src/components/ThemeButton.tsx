"use client";

import React, { useEffect, useState } from "react";

import { Switch } from "./ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
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

  return (
    <Switch
      dir="ltr"
      className="data-[state=checked]:bg-accent"
      checked={isDark}
      onCheckedChange={(v) => {
        setIsDark(v);
        window.localStorage.setItem("Local-theme", `${v}`);
      }}
      //   icon={isDark ? Moon : Sun}
      //   iconclassname="w-4 h-4"
    />
  );
}
