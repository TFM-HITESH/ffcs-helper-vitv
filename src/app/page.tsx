import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";
export default function Home() {
  return (
    <section className="body-font">
  <div className="container px-5 py-24 mx-auto bg-dark rounded-md">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-lighter">Welcome to FFCS Time Table Manager</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-lightest">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap">
      
      
    </div>
    <Button className="flex mx-auto mt-16 border-0 py-2 px-8" variant="default"><a href="/authSignup">Create Your Timetable!</a></Button>
  </div>
</section>
  );
}
