import Link from "next/link";

export default function Home() {
  return (
    <main className="text-4xl flex flex-col ">
      Hello World
      <Link href="/dashboard" className="bg-red-500 w-[50%]">
        Click me !
      </Link>
    </main>
  );
}
