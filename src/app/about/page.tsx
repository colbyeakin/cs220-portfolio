import React from "react";

export default function Page() {
    return (
        <main>
            <section className="min-h-screen card-text flex items-center justify-center px-8 py-16">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            I'm Colby. I live in Utah, where I design the future.
                        </h1>
                        <p className="text-neutral-400 mb-4 leading-relaxed">
                            I'm a student at Ensign College with the aspiration of becoming a
                            Walt Disney Imagineer. I love to design and create, and I am always
                            looking for new opportunities to learn and grow.
                        </p>
                        <p className="text-neutral-400 mb-4 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                            perspiciatis officiis tempora! Nostrum, sapiente quas. Quasi minima
                            possimus pariatur laudantium.
                        </p>
                        <p className="text-neutral-400 mb-4 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                            perspiciatis officiis tempora! Nostrum, sapiente quas. Quasi minima
                            possimus pariatur laudantium.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img src="/profile-pic.jpg" alt="Profile Picture" className="w-1/3 md:w-[215px] h-auto rounded-2xl shadow-xl object-cover" />
                        <div className="flex flex-col space-x-2 mt-6 px-8 py-4">
                            <a
                                href="https://www.linkedin.com/in/colby-eakin/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-4"
                            >
                                <img src="/linkedin-logo.png" alt="LinkedIn" className="h-6 w-6" />
                                <span>Follow me on Linkedin</span>
                            </a>
                            <a
                                href="https://www.facebook.com/colby.eakin.2025"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-4"
                            >
                                <img src="/facebook-logo.png" alt="Facebook" className="h-6 w-6" />
                                <span>Follow me on Facebook</span>
                            </a>
                            <a
                                href="https://github.com/colbyeakin"
                                aria-label="Github"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-4"
                            >
                                <img src="/github-logo.png" alt="Github" className="h-6 w-6 filter dark:invert" />
                                <span>Follow me on Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}