"use client"
import { FaBoxes } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";

import { IconType } from "react-icons";

interface Background {
    name: string;
    icon: IconType;
    paragraph: string;
}

export default function Experience() {
    const background: Background[] = [
        { name: "summary", icon: GiProgression, paragraph: "My journey from the structured world of product management to the fluid lines of software development has been filled with lessons learned and challenges met. It's a path that has shaped me into not just a developer, but a visionary capable of seeing beyond the code—to the very heart of what makes a product successful."},
        { name: "deliverr", icon: FaBoxes, paragraph: "Picture this: a bustling startup, Deliverr Inc., navigating the complex world of logistics and e-commerce. There, I stepped into the shoes of a Product Manager II, a role that was both a challenge and a thrill from June 2019 to October 2023. In this arena, I championed a label-less inbounding program, cutting through the red tape to simplify shipping for our clients and boosting inbound volume by 30%. Leading agile teams, I was the maestro behind the curtain, orchestrating innovations that sang harmonies of efficiency and satisfaction."},
        { name: "coyote", icon: FaTruckFront, paragraph: "But my story didn't start there. Rewind to June 2014, in the heart of Chicago with Coyote Logistics. As an Operations Team Lead, I was the guardian of over 20 customer accounts, overseeing a symphony of 75,000 annual loads. Here, I played a pivotal role in a logistical ballet, repositioning 30,000 leased assets for UPS's peak season with the finesse of a chess grandmaster, ensuring every piece was exactly where it needed to be."},
    ]

    return (
        <div className="mt-6 space-y-4">
            <h1 className="border-b border-gray-200 text-3xl font-bold text-center mb-4 pb-4">Where I&apos;ve Been</h1>
            {background.map(({name, icon: Icon, paragraph}) => (
                <div key={name} className="flex items-center justify-center gap-20 px-44">
                    <Icon className="flex-none" size={80}/>
                    <p className="text-muted-foreground flex-1">
                        {paragraph}
                    </p>
                </div>
            ))}
        </div>
    );
    
}