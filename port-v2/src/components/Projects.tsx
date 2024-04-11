"use client"

interface Project{
    name: string;
    github: string;
    description: string;
    media: {
        type: 'image' | 'comingSoon' | 'video';
        url?: string
    };
}

export default function Projects() {
    const project : Project[] = [
        { name: "RemindMe (Coming Soon)", github: "https://github.com/tyjsmith1/remindme", description: "In today's fast-paced world, it's easy to forget the little things - but RemindMe is here to ensure you never miss a beat. Introducing RemindMe, a free, intuitive reminder service crafted to help you keep track of your important tasks and commitments. Simply input your email address, what you need to be reminded of, and the exact time you need a nudge. Like a personal assistant dedicated to your schedule, RemindMe will send you an email reminder at the specified time, ensuring you're always ahead of your responsibilities. Whether it's a crucial meeting, a birthday, or just a reminder to take a break, RemindMe is your go-to solution for staying organized and efficient. Say goodbye to missed appointments and forgotten tasks - with RemindMe, you're always in control. Stay tuned for the launch of RemindMe - the last reminder service you'll ever need.", media: {type: 'comingSoon'}},
        { name: "Sprintr", github: "https://github.com/tyjsmith1/sprintr", description: "Introducing Sprintr, a cutting-edge agile project management tool engineered to revolutionize how tech teams manage their workflows. At its heart is an innovative auto-assignment system that smartly matches tasks to team members based on their expertise and current workload, powered by a robust combination of Python, Flask, and React for a seamless backend logic and a responsive user interface. Sprintr simplifies the management of tasks, sprints, and collaborations, aiming to enhance team productivity by automating administrative processes, thus allowing members to focus more on innovation. Sprintr is your agile project management solution, designed to make your team's aspirations a reality.", media: { type: 'video', url:'https://www.youtube.com/embed/4EW0uaHWRZs?si=IrqRe_z_H9KZ-ZB0'}},
        { name: "Drayage Rate Manager", github: "https://github.com/tyjsmith1/drayage-rate-manager", description: "In response to the need for a more streamlined, efficient, and user-friendly way to manage drayage pricing, our project aims to develop a micro version of a drayage pricing management tool. This tool is designed to facilitate the upload, update, and search of rate tariffs by drayage companies (referred to as draymen) and enable brokers to find the best rates for their clients efficiently. The development of this system will leverage React for the front-end user interface and Python with Flask for the back-end server, ensuring a robust, scalable, and interactive application.", media: {type: 'comingSoon'}},
    ]

    return (
        <div className="mt-6">
            <h1 className="border-b border-gray-200 text-3xl font-bold text-center mb-4 pb-4">Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.map(({name, github, description, media}) => (
                    <div key={name} className="border rounded-lg p-4 shadow-lg">
                        <h2 className="text-xl font-bold mb-2">{name}</h2>
                        {
                            media.type === 'image' && <img src={media.url} alt={name} className="w-full h-auto mb-2" />
                        }
                        {
                            media.type === 'comingSoon' && <p className="text-center text-lg font-semibold italic">Coming Soon</p>
                        }
                        {
                            media.type === 'video' && <iframe src={media.url} title={name} className="w-full" height="315" allowFullScreen></iframe>
                            
                        }
                        <p className="text-gray-400 mb-2">{description}</p>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">GitHub Repo</a>
                    </div>
                ))}
            </div>
        </div>
    )
}