import React from 'react';
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from '../constants';

const socialLinks = [
    { icon: <GithubIcon />, href: "https://github.com/greencookie-afk", name: 'GitHub' },
    { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/mithun-chakladar/", name: 'LinkedIn' },
    { icon: <XIcon />, href: "https://twitter.com/MithStruct", name: 'X' },
    { icon: <MailIcon />, href: "mailto:mithunchakladar123@gmail.com", name: 'Email' },
];

const Footer: React.FC = () => {
    return (
        <footer className="py-16 bg-light-background mt-12 md:mt-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-secondary max-w-xl mx-auto mb-8">
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you!
                </p>
                <div className="flex items-center justify-center space-x-6 mb-8">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="text-secondary hover:text-accent transition-colors duration-300"
                        >
                            {React.cloneElement(link.icon, { className: 'w-7 h-7' })}
                        </a>
                    ))}
                </div>
                <p className="text-sm text-gray-500">
                    Built by Mithun Chakladar (greencookie) with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;