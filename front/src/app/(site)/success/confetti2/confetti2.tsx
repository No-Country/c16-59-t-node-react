/* import React, { useState, useEffect, useRef } from 'react';
const SHAPES = ['square', 'triangle'];
const COLOR_DIGIT = "ABCDEF1234567890";

const ConfettiButton = () => {
    const [isConfettiActive, setConfettiActive] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        if (isConfettiActive) {
            generateConfetti();
        }
    }, [isConfettiActive]);

    const generateRandomColor = () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
        }
        return color;
    };

    const handleClick = () => {
        setConfettiActive(true);
        // Reset the confetti after a short delay
        setTimeout(() => {
            setConfettiActive(false);
        }, 4000);
    };

    return (
        <div>
            <button className='font-bold text-xl' onClick={handleClick}>Click for Confetti</button>
            <div className='fixed top-0 left-0 w-full h-full pointer-events-none' ref={containerRef} id="confetti-container"></div>
        </div>
    );
    export default ConfettiButton; */