import React from 'react';
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from '../constants';

const About: React.FC = () => {
    return (
        <div>
            <h1>Mithun Chakladar</h1>
            <h2 style={{ borderBottom: 'none', color: 'var(--text-secondary)', marginBottom: '32px' }}>Software Engineer & Designer</h2>
            
            <p style={{ marginBottom: '16px' }}>
                Hello! I'm Mithun, a third-year B.Tech CSE student from St. Andrews (MDU) based in Delhi NCR, India. I thrive on learning to build things for the web, from sleek user interfaces to robust applications.
            </p>
            <p style={{ marginBottom: '16px' }}>
                I am currently focusing on building my skills in creating accessible, inclusive products and digital experiences. As a student, I'm always eager to learn new technologies and improve my craft.
            </p>
            <p>
                When I'm not at the computer, I'm usually playing video games, watching anime, exploring new coffee shops in town or having talks with someone whose name is hidden in every song I love.
            </p>

            <div className="social-links">
                <a href="https://github.com/greencookie-afk" target="_blank" rel="noopener noreferrer" className="social-link"><GithubIcon /></a>
                <a href="https://linkedin.com/in/mithun-chakladar" target="_blank" rel="noopener noreferrer" className="social-link"><LinkedinIcon /></a>
                <a href="https://x.com/greencookieafk" target="_blank" rel="noopener noreferrer" className="social-link"><XIcon /></a>
                <a href="mailto:hello@example.com" className="social-link"><MailIcon /></a>
            </div>
        </div>
    );
};

export default About;