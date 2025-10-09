import React from "react";

const IntroCard: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-card text-card rounded-xl overflow-hidden shadow-md">
            <div className="p-8 md:p-12">
                <div className="uppercase tracking-wide text-sm muted font-semibold">Colby Eakin</div>
                <p className="block mt-2 text-2xl md:text-3xl leading-tight font-semibold">Software Engineer, Student, and Believer</p>
                <p className="mt-3 muted max-w-3xl">
                    I'm a creative soul who loves to inspire others to chase their dreams and achieve the impossible.
                    Some of my hobbies include hiking, traveling, music, and coding. I'm an aspiring software
                    engineer with a passion for building delightful user experiences.
                </p>
                <div className="flex space-x-4 mt-6">
                    <a
                        href="https://www.linkedin.com/in/colby-eakin/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><img src="/linkedin-logo.png" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.facebook.com/colby.eakin.2025"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><img src="/facebook-logo.png" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a
                        href="https://github.com/colbyeakin"
                        aria-label="Github"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><img src="/github-logo.png" alt="Github" className="h-6 w-6 github-logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default IntroCard;
