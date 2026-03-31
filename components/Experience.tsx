import React from 'react';
import { experiences } from '../constants';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => {
    const isAchievement = item.role.includes("Winner") || item.role.includes("Finalist");
    return (
        <div className={`bento-card ${isAchievement ? 'achievement-banner' : ''}`}>
            <span className="date">{item.period}</span>
            <h3>{item.role}</h3>
            <p style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '0.95rem' }}>{item.company}</p>
            <p style={{ fontSize: '0.9rem' }}>{item.description}</p>
        </div>
    );
};

const ExperienceComponent: React.FC = () => {
    return (
        <div>
            <h2>Experience & Achievements</h2>
            <div className="bento-grid">
                {experiences.map((item, index) => (
                    <ExperienceCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceComponent;