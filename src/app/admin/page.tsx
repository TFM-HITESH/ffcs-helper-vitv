import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";

export default async function Admin() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    <p>You need to be logged in to see this page !</p>;
    redirect("/api/auth/login");
  }

  return <main className="text-4xl">ADMIN</main>;
}
