
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-background font-sans">
            <main>
                <Header />
                <About />
                <Experience />
                <Projects />
                <Footer />
            </main>
        </div>
    );
};

export default App;