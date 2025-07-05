import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">About Me</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4 text-secondary text-lg">
                        <p>
                            Hello! I'm Mithun, a third-year B.Tech CSE student from St. Andrews (MDU) based in Delhi NCR, India. I thrive on learning to build things for the web, from sleek user interfaces to robust applications.
                        </p>
                        <p>
                           I am currently focusing on building my skills in creating accessible, inclusive products and digital experiences. As a student, I'm always eager to learn new technologies and improve my craft.
                        </p>
                        <p>
                            When I'm not at the computer, I'm usually playing video games, watching anime, exploring new coffee shops in town or having talks with someone whose name is hidden in every song I love..
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-primary">Core Technologies</h3>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>TypeScript</li>
                            <li>React & Next.js</li>
                            <li>Node.js</li>
                            <li>Tailwind CSS</li>
                            <li>GraphQL</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;