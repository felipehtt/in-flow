import React, { useEffect, useState } from 'react';
import './index.scss';

const MouseShadow = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     
    const cor = 'yellow'

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="mouse-shadow" style={{ left: mousePosition.x, top: mousePosition.y}} >
            <div className="shadow" />
        </div>
    );

};

export default MouseShadow;