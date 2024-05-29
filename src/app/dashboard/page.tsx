import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";

export default async function Dashboard() {
  // This check is already implemented in middleware.ts.
  // But we are doing this additional check here to get
  // the toast to be triggered upon login or failure to login
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    <p>You need to be logged in to see this page !</p>;
    redirect("/api/auth/login");
  }
  const user = await getUser();

  return (
    <main className="text-4xl">
      <p className="bg-green-500">Successfully Logged in as {user?.email}</p>
      This should only be visible to logged in users
    </main>
  );
}
