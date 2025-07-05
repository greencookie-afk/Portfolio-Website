import React from 'react';
import { Project, Experience } from './types';

// Icons
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

// Portfolio Data
export const experiences: Experience[] = [
    {
        role: "B.Tech, Computer Science Engineering",
        company: "St. Andrews Inst. of Tech. & Management (MDU)",
        period: "2022 - 2026",
        description: "Currently in my third year, building a strong foundation in software development, data structures, and algorithms while actively creating projects to hone my skills."
    },
    {
        role: "Hackathon Finalist (Top 30%)",
        company: "HackArena Ignite @ IIIT New Delhi",
        period: "2025",
        description: "Competed against 200+ teams to reach the final rounds, placing in the top 30%. Developed and pitched a full-stack application under a tight 48-hour deadline."
    },
    {
        role: "Web Development Training",
        company: "Kreaton Technologies",
        period: "1st & 2nd Year",
        description: "Completed comprehensive web development training, gaining foundational skills in modern front-end and back-end technologies."
    },
    {
        role: "IBM Certifications",
        company: "IBM SkillsBuild",
        period: "1st Year",
        description: "Earned foundational certifications in Artificial Intelligence, Professional Skills, and IT Fundamentals for Beginners."
    }
];

export const projects: Project[] = [
    {
        title: "LearnChain dApp",
        description: "A decentralized application for a learning platform, built on blockchain technology to ensure verifiable credentials and transparent interactions.",
        tags: ["React", "Solidity", "Ethers.js", "Blockchain", "Tailwind CSS"],
        githubUrl: "https://github.com/greencookie-afk/learnChain-dapp"
    },
    {
        title: "Versatile Frontend",
        description: "A collection of reusable and versatile frontend components and templates designed for modern web applications, focusing on accessibility and developer experience.",
        tags: ["React", "TypeScript", "Next.js", "Storybook", "CSS"],
        githubUrl: "https://github.com/greencookie-afk/versatile-frontend"
    },
    {
        title: "Dotnet Website",
        description: "A full-stack web application developed with the .NET framework, showcasing backend development skills integrated with a responsive, user-facing interface.",
        tags: [".NET", "C#", "ASP.NET Core", "React", "SQL"],
        githubUrl: "https://github.com/greencookie-afk/Dotnet-website"
    }
];
