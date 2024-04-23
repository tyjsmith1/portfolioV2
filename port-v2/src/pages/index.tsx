import { Inter } from "next/font/google";

import Nav from "../components/Nav";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Portrait from "@/components/Portrait";
import RootLayout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <main className="p-4 md:p-20">
        <Nav />
        <section className="py-10 flex flex-col gap-8 items-center text-center">
            <h1 className="hidden md:block md:text-4xl font-bold">Hey there! I&apos;m on a coding adventure.</h1>
            <p className="text-lg md:text-2xl text-muted-foreground">
            A software developer with a product background walks into a bar...
            </p>
            <Portrait/>
            <Socials/>
        </section>
        <div className="flex flex-col md:flex-row w-full md:gap-x-16 ">
            <Skills />
            <Bio />
        </div>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </RootLayout>
  );
}