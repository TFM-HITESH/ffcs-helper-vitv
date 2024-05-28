"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import React from "react";

export default function Navbar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <div className="flex flex-row gap-2">
      <div>Logo</div>
      <p>Logged in with email : {user?.email}</p>
    </div>
  );
}
