import React, { useState, useEffect, useRef } from 'react';

const ScrollingText: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (containerRef.current) {
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate when the element is in the viewport
            const start = windowHeight;
            const end = -height;
            
            const progress = (top - start) / (end - start);
            
            if(progress >= 0 && progress <=1){
                 setScrollPosition(progress);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const text = "MITHUN CHAKLADAR — GREENCOOKIE — ";
    const repeatedText = text.repeat(5);
    const translateX = -50 + (scrollPosition * 50);

    return (
        <div ref={containerRef} className="relative h-64 my-10 md:my-16 overflow-x-hidden">
            <div
                className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap will-change-transform"
                style={{ transform: `translateX(${translateX}%)` }}
            >
                <h2 className="text-[12vw] md:text-[8vw] font-black text-light-background select-none">
                    {repeatedText}
                </h2>
            </div>
        </div>
    );
};

export default ScrollingText;