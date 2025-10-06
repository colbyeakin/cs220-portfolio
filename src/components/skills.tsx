import React from 'react';

const techs = [
    { name: 'Java', color: 'bg-red-600', image: <img src="/java-4-logo.png" alt="Java" className="w-5 h-5" /> },
    { name: 'React', color: 'bg-white', image: <img src="/React-icon.svg.png" alt="React" className="w-5 h-5" /> },
    // JavaScript logo background approx: #f7df1e (official JS yellow)
    { name: 'JavaScript', color: '#f7df1e', image: <img src="/JavaScript-logo.png" alt="JavaScript" className="w-5 h-5" /> },
    { name: 'HTML', color: 'bg-orange-500', image: <img src="/html-logo.png" alt="HTML" className="w-5 h-5" /> },
];

const SkillBadge: React.FC<{ name: string; color?: string; image?: React.ReactElement }> = ({ name, color = 'bg-gray-200', image }) => {
    const isHex = typeof color === 'string' && color.startsWith('#');
    const circleClass = `flex items-center justify-center w-10 h-10 rounded-full ${isHex ? '' : color} flex-shrink-0`;
    const circleStyle = isHex ? { backgroundColor: color } as React.CSSProperties : undefined;
    return (
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 shadow-sm">
            <div className={circleClass} style={circleStyle}>
                {image ? image : <span className="text-sm font-semibold">{name[0]}</span>}
            </div>
            <div>
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-xs text-gray-300">Intermediate</div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section className="mt-8 rounded-xl p-6 bg-card text-card border border-var">
            <h2 className="text-xl font-semibold">Skills & Technologies</h2>
            <p className="text-sm muted mt-1">A snapshot of tools I use regularly.</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techs.map((t) => (
                    <SkillBadge key={t.name} name={t.name} color={t.color} image={t.image} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
