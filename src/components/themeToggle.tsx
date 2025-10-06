"use client";

import React, { useEffect, useState } from 'react';

const THEME_KEY = 'site-theme';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'dark';
        return (localStorage.getItem(THEME_KEY) as 'light' | 'dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            // ignore
        }
    }, [theme]);

    return (
        <div>
            <button
                onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                className="p-2 rounded-md hover:bg-white/5 transition-border border-solid border-transparent hover:border-white/20"
                aria-label="Toggle theme"
                title="Toggle theme"
            >
                {theme === 'dark' ? (
                    // Sun icon for light mode
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                    </svg>
                ) : (
                    // Moon icon for dark mode
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;
