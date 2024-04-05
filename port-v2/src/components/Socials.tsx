"use client"

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

interface SocialLink {
    url: string;
    icon: IconType;
}

export default function Socials() {
    const socialLinks: SocialLink[] = [
        { url: "https://github.com/tyjsmith1", icon: FaGithub },
        { url: "https://www.linkedin.com/in/tyler-smith-pm-se/", icon: FaLinkedin },
        { url: "https://leetcode.com/tyjsmith1/", icon: SiLeetcode },
        { url: "https://www.youtube.com/@tylersmith644", icon: FaYoutube },
    ]

    return (
        <div>
            <ul className="flex flex-row">
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