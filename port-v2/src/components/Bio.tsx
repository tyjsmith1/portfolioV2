"use client"

interface BioParagraph {
    id: number;
    paragraph: string;
}

export default function Bio() {
    const paragraph: BioParagraph[] = [
        {id: 1, paragraph:"Welcome to my portfolio. I'm a Product Manager transitioning to Software Engineering, deeply rooted in the supply chain and e-commerce fulfillment sectors. My journey from leading successful startup projects to mastering coding at a bootcamp showcases my dedication to learning and tackling challenges head-on."},
        {id: 2, paragraph:"Skilled in React, TypeScript, Python, and Flask, I thrive on turning complex problems into innovative solutions. My project, Sprintr, exemplifies my ability to blend strategy with technical execution, particularly in enhancing team dynamics and project management through analytics."},
        {id: 3, paragraph:"At the intersection of management and engineering, I'm driven to apply my blend of vision and technical expertise to projects that redefine industries. Here, you'll find a showcase of my work, skills, and the unique perspective I bring to the tech world. I'm here to drive change and contribute to the future of technology."},
    ]
    return (
        <div className="w-1/2 justify-end">
            <div className="px-6">
                <h1 className="text-3xl font-bold border-b border-gray-200 mb-4 pb-4">About Me</h1>
                {paragraph.map(({ id, paragraph}) => 
                <p key={id} className="mb-4 text-muted-foreground">{paragraph}</p>
                )}
            </div>
        </div>
    )
}

