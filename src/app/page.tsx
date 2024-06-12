import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Particles } from "@/components/particles";
export default function Home() {
  return (
    <div className="pt-20">
      <Particles className="absolute inset-0 -z-10"></Particles>
                <div className="text-center px-8">
                    <div className="mb-6">
                        
                    </div> 
                    <div>
                        <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-amber-400 via-red-600 to-amber-400">FFCS Planner</h1>
                        <p className="mb-8 text-lg dark:text-zinc-300/40 font-medium" data-aos="fade-down" data-aos-delay="200">Create Your Desired Timetable within seconds!</p>
                    </div>   
                    <div>
                    <Button className="flex mx-auto mt-16 border-0 py-2 px-8" variant="default"><a href="/authSignup">Create Your Timetable!</a></Button>
                            
                    </div>      
                </div>
            </div>
  );
}
