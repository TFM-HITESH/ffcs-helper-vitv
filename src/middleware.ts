import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("Protecting the routes . . .");
  return withAuth(request);
}
export const config = {
  matcher: ["/dashboard/:path*"],
};

//Remember to add server actions into the middleware protections - https://youtu.be/kbCzZzXTjuw - Timestamp - 21:26 - 25:18.
//Also remember to add the protection to each specific server-action using the code as follows =>

//     const { isAuthenticated } = getKindeServerSession();
//   if (!(await isAuthenticated())) {
//     <p>You need to be logged in to see this page !</p>;
//     redirect("/api/auth/login");
//   }
