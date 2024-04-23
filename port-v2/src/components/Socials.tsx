"use client"

import { FaGithub, FaLinkedin, FaYoutube, FaCloudDownloadAlt } from "react-icons/fa";
import { TbMailFast } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

interface SocialLink {
    url: string;
    icon: IconType;
}

interface Contact {
    url: string;
    icon: IconType;
    text: string;
}

export default function Socials() {
    const contacts: Contact[] = [
        { url: "#contact", icon: TbMailFast, text: "Contact Me"},
        { url: "/Tyler_Smith_Resume.pdf", icon: FaCloudDownloadAlt, text: "Download Resume" },
    ]

    const socialLinks: SocialLink[] = [
        { url: "https://www.github.com/tyjsmith1", icon: FaGithub},
        { url: "https://www.linkedin.com/in/tyler-smith-pm-se/", icon: FaLinkedin},
        { url: "https://leetcode.com/tyjsmith1/", icon: SiLeetcode},
        { url: "https://www.youtube.com/@tylersmith644", icon: FaYoutube},
    ]

    return (
        <div>
            <div>
                <ul className="flex flex-col md:flex-row">
                    {contacts.map(({ url, icon:Icon, text}) =>
                    <li key={text}>
                        <a href={url} 
                        className="
                            dark:invert bg-gray-900 text-white
                            px-2 flex md:flex-row justify-center items-center
                            m-2 md:w-auto w-full
                            rounded-full
                            hover:scale-105 transition-transform duration-200"
                        download={text === "Download Resume"}>
                            <span className="text-center w-full">{text}</span>
                            <Icon size={30} />
                        </a>
                    </li>
                    )}
                </ul>
            </div>
            <ul className="flex flex-row justify-center py-4">
                {socialLinks.map(({ url, icon: Icon}) => 
                <li key={url} className="px-2 hover:scale-110 transition-transform duration-200">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Icon size={30}/>
                    </a>
                </li>
                )}
            </ul>
        </div>
    )
}