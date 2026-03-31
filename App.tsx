
import React, { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'projects'>('about');

    return (
        <>
            <div className="stars"></div>
            <div className="hub-container">
                <nav className="nav-dock">
                    <button 
                        className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        About
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        Experience & Achievements
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects & Open Source
                    </button>
                </nav>
                
                <main className="content-pane fade-in" key={activeTab}>
                    {activeTab === 'about' && <About />}
                    {activeTab === 'experience' && <Experience />}
                    {activeTab === 'projects' && <Projects />}
                </main>
            </div>
        </>
    );
};

export default App;