import React from 'react';
import { experiences } from '../constants';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
    <div className="group relative pl-8 sm:pl-12 py-6">
        <div className="absolute left-[1px] top-8 h-[calc(100%-32px)] w-0.5 bg-light-background"></div>
        <div className="absolute left-[-5px] top-[28px] h-3 w-3 rounded-full bg-secondary group-hover:bg-accent transition-colors duration-300"></div>
        
        <p className="text-sm font-medium text-secondary mb-1">{item.period}</p>
        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{item.role}</h3>
        <p className="text-md text-secondary mb-3">{item.company}</p>
        <p className="text-secondary">{item.description}</p>
    </div>
);


const ExperienceComponent: React.FC = () => {
    return (
        <section id="experience" className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Education & Achievements</h2>
                <div className="relative">
                    {experiences.map((item, index) => (
                        <ExperienceCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceComponent;