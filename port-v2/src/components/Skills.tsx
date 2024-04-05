"use client"

import { SiJavascript, SiReact, SiTypescript, SiPython, SiFlask, SiPostgresql, SiNextdotjs, SiTailwindcss} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
    name: string;
    icon: IconType;
    colorClass?: string
}

export default function Skills() {
    const skills: Skill[] = [
        { name: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-300"},
        { name: "React", icon: SiReact, colorClass:"text-blue-300"},
        { name: "Typescript", icon: SiTypescript, colorClass:"text-blue-800"},
        { name: "Next.js", icon: SiNextdotjs},
        { name: "Python", icon: SiPython, colorClass:"text-green-500"},
        { name: "Flask", icon: SiFlask},
        { name: "PostgreSQL", icon: SiPostgresql, colorClass:"text-blue-700"},
        { name: "Tailwind CSS", icon: SiTailwindcss, colorClass:"text-teal-500"},
    ]

    return (
        <div className="w-1/2 justify-start">
            <div className="px-6 space-y-4">
                <h1 className="text-3xl font-bold text-end border-b border-gray-200 mb-4 pb-4">Familiar Technologies</h1>
                <ul className="flex flex-wrap justify-end h-full">
                    {skills.map(({ name, icon: Icon, colorClass}) => (
                        <li key={name} className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200">
                            <Icon className={colorClass ?? ''} size={60}/>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

