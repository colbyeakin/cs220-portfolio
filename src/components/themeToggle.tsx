"use client";

import React, { useEffect, useState } from "react";

const THEME_KEY = "site-theme";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        // Get stored or system theme
        const stored = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        const initial = stored || (prefersLight ? "light" : "dark");
        setTheme(initial);
        document.documentElement.setAttribute("data-theme", initial);
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem(THEME_KEY, theme);
        }
    }, [theme]);

    if (!theme) return null; // 👈 Prevent render until theme known

    return (
        <div className="absolute top-4 right-4 z-50">
            <button
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
                title="Toggle theme"
            >
                {theme === "dark" ? (
                    // ☀️ Sun icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="1.5"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364 6.364l-1.591-1.591M6.227 6.227 4.636 4.636m0 14.728 1.591-1.591m12.546-12.546 1.591 1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                        />
                    </svg>
                ) : (
                    // 🌙 Moon icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="0.5"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0112.004 21c-5.385 0-9.75-4.365-9.75-9.75 0-4.012 2.343-7.482 5.743-9.084a.75.75 0 01.977.977 7.5 7.5 0 0012.778 9.859z"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;
