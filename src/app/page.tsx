import Link from "next/link";

export default function Home() {
  return (
    <main className="text-4xl flex flex-col ">
      Hello World
      <Link href="/dashboard" className="bg-red-500 w-[50%]">
        /dashboard
      </Link>
      <Link href="/authSignup" className="bg-blue-500 w-[50%]">
        /authSignup
      </Link>
      <Link href="/authLogin" className="bg-green-500 w-[50%]">
        /authLogin
      </Link>
    </main>
  );
}
