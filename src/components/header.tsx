"use client";

import React from "react";
import NavBar from "./navbar";
import ThemeToggle from "./themeToggle";

const Header: React.FC = () => {
    return (
        <header className="nav-bg nav-text">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <div className="text-white font-semibold">Colby Eakin</div>
                    </div>

                    <div>
                        <NavBar />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
