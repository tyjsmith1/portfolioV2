"use client"

import Image from "next/image";
import { ModeToggle } from "./ui/ToggleMode";

export default function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex justify-between">
                    <li className="flex flex-row items-end">
                        <Image
                            src="/tyler-logo.svg"
                            alt="Tyler Smith Logo"
                            className="dark:invert"
                            width={60}
                            height={50}
                            priority
                        />
                        <h1 className="text-4xl font-bold align-bottom ml-1">yler Smith</h1>
                    </li>
                    <li>
                        <ModeToggle/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
