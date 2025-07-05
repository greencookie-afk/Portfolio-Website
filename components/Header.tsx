import React from 'react';
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from '../constants';

const socialLinks = [
    { icon: <GithubIcon />, href: "https://github.com/greencookie-afk", name: 'GitHub' },
    { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/mithun-chakladar/", name: 'LinkedIn' },
    { icon: <XIcon />, href: "https://twitter.com/MithStruct", name: 'X' },
    { icon: <MailIcon />, href: "mailto:mithunchakladar123@gmail.com", name: 'Email' },
];

const Header: React.FC = () => {
    return (
        <header id="home" className="min-h-screen flex items-center justify-center py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Mithun Chakladar
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-accent mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Aspiring Frontend Engineer
                    </p>
                    <p className="text-secondary mt-6 max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        A third-year Computer Science student building and learning. I create responsive, accessible, and beautiful web experiences.
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-5 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-secondary hover:text-accent transition-colors duration-300"
                            >
                                {React.cloneElement(link.icon, { className: 'w-6 h-6' })}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Profile Picture */}
                <div className="flex justify-center md:justify-end order-1 md:order-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                     <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-light-background shadow-lg">
                        <img src="https://i.pinimg.com/736x/77/4f/48/774f4865cf1f9d861f0d44a88840b2b3.jpg"
                            alt="Mithun Chakladar's profile picture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
