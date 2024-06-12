"use client";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeButton";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/admin",
    label: "Admin",
  },
];

// Consider better implementation for this by adding separate layout.tsx in both /authLogin & /authSignup
const hiddenNavbarPaths = ["/authLogin", "/authSignup"];

export default function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  if (hiddenNavbarPaths.includes(pathname)) {
    return null;
  }

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5  text-[14px]">
          <ThemeSwitch />
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-400" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
