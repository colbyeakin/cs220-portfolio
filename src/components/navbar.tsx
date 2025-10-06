"use client";

import React, { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 480; // px

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const mobile = typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className={isMobile ? "flex justify-start py-2 px-0" : "flex justify-end py-2"}>
      <nav
        className={"rounded-full px-4 py-2 relative nav-bg shadow-md border border-var"}
        aria-label="Main Navigation"
      >
        {/* Desktop nav */}
        {!isMobile && (
          <ul className="flex space-x-6 text-sm font-medium nav-text">
            <li>
              <a
                href="/"
                className="transition duration-200 ease-in-out hover:underline link-var"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="transition duration-200 ease-in-out hover:underline link-var"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="transition duration-200 ease-in-out hover:underline link-var"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="transition duration-200 ease-in-out hover:underline link-var"
              >
                Contact
              </a>
            </li>
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {menuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-700 transform transition-transform duration-200 ${menuOpen ? 'rotate-90 scale-105' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-700 transform transition-transform duration-200 ${menuOpen ? 'rotate-90 scale-105' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* overlay that blurs the rest of the page when menu is open */}
        {isMobile && menuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-10"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile dropdown menu */}
        {/* animate via transform + opacity + max-height for smooth open/close */}
        {isMobile && (
          <div
            id="mobile-menu"
            className={`absolute left-0 top-full mt-2 w-44 bg-white rounded-lg shadow-md z-20 transform origin-top transition-all duration-300 ease-out ${menuOpen ? 'opacity-100 translate-y-0 scale-100 max-h-60 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-95 max-h-0 overflow-hidden pointer-events-none'}`}
            aria-hidden={!menuOpen}
          >
            <ul className="flex flex-col text-sm font-medium text-gray-700">
              <li>
                <a href="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Home</a>
              </li>
              <li>
                <a href="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">About</a>
              </li>
              <li>
                <a href="/projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Projects</a>
              </li>
              <li>
                <a href="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
