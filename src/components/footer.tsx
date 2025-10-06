import React from "react";


const Footer: React.FC = () => {
    return (
        <footer className="nav-bg nav-text py-4 mt-10 border-t border-var">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;