import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";

export default async function TimeTablePage() {
  // This check is already implemented in middleware.ts.
  // But we are doing this additional check here to get
  // the toast to be triggered upon login or failure to login
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    <p>You need to be logged in to see this page !</p>;
    redirect("/api/auth/login");
  }

  return (
    <main className="text-4xl">
      <p className="bg-green-500">Successfully Logged in !</p>
      This should only be visible to logged in users
    </main>
  );
}
