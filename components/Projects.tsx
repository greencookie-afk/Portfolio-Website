import React from 'react';
import { projects } from '../constants';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="bento-card">
            {project.liveUrl && (
                <img src={`https://image.thum.io/get/width/1200/crop/800/${project.liveUrl}`} alt={project.title} className="thumbnail" loading="lazy" />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{project.title}</h3>
                <div style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)' }}>
                    <span onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, '_blank') }} style={{ cursor: 'pointer' }}><GithubIcon style={{ width: '20px', height: '20px' }} /></span>
                    {project.liveUrl && <ExternalLinkIcon style={{ width: '20px', height: '20px' }} />}
                </div>
            </div>
            <p style={{ fontSize: '0.9rem' }}>{project.description}</p>
            <div className="tag-list">
                {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </a>
    );
}

const Projects: React.FC = () => {
    return (
        <div>
            <h2>Projects & Open Source</h2>
            <div className="bento-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;