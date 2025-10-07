import React from 'react';

const projects = [
    { title: 'Theme Park Scheduler', desc: 'A scheduling tool built with Java and React', href: '/projects' },
    { title: 'Portfolio Site', desc: 'This website - built with Next.js and Tailwind', href: '/projects' },
    { title: 'Interactive Map', desc: 'A JS-driven map visualization', href: '/projects' },
];

const ProjectsPreview: React.FC = () => {
    return (
        <section className="mt-10">
            <h3 className="text-lg font-semibold nav-text">Selected Projects</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {projects.map((p) => (
                    <a key={p.title} href={p.href} className="block bg-white/5 rounded-lg p-4 hover:shadow-md transition">
                        <div className="font-semibold nav-text">{p.title}</div>
                        <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPreview;
