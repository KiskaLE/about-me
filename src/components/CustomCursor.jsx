import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <div ref={cursorRef} className="cursor-pixel" />;
};
