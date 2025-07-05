
import React from 'react';
import { projects } from '../constants';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-light-background p-6 rounded-lg flex flex-col h-full group transition-transform duration-300 hover:-translate-y-1 shadow-lg">
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center space-x-3 flex-shrink-0">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="text-secondary hover:text-primary transition-colors">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                        {project.liveUrl && project.liveUrl !== "#" && (
                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className="text-secondary hover:text-primary transition-colors">
                                <ExternalLinkIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-secondary mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs font-medium bg-gray-700/50 text-accent px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;