import ThemeSwitch from "@/components/ThemeButton";

import Link from "next/link";

export default function Home() {
  return (
    <main className="text-4xl flex flex-col ">
      Hello World
      <ThemeSwitch />
      <Link href="/timetables" className="bg-red-500 w-[50%]">
        Click me !
      </Link>
    </main>
  );
}
