import React, { useState, useRef, useEffect } from 'react';

const TextParticleInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef(null);
  const textContainerRef = useRef(null);
  const cursorRef = useRef(null);

  // Update cursor position
  useEffect(() => {
    if (inputRef.current && cursorRef.current) {
      // Create temporary span to measure text width
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.whiteSpace = 'pre';
      tempSpan.style.font = window.getComputedStyle(inputRef.current).font;
      tempSpan.textContent = inputValue.slice(0, cursorPosition);
      document.body.appendChild(tempSpan);
      
      // Position cursor
      const textWidth = tempSpan.offsetWidth;
      cursorRef.current.style.left = `${textWidth + 24}px`; // 24px accounts for input padding
      document.body.removeChild(tempSpan);
    }
  }, [cursorPosition, inputValue]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      moveCursorToStart();
      createTextParticles();
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setInputValue('');
      }, 300);
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const moveCursorToStart = () => {
    setCursorPosition(0);
    if (inputRef.current) {
      inputRef.current.selectionStart = 0;
      inputRef.current.selectionEnd = 0;
    }
  };

  const createTextParticles = () => {
    if (!textContainerRef.current || !inputValue) return;

    const containerRect = textContainerRef.current.getBoundingClientRect();
    const fontSize = parseInt(window.getComputedStyle(textContainerRef.current).fontSize);
    const letterSpacing = parseFloat(window.getComputedStyle(textContainerRef.current).letterSpacing) || 0;

    // Create particles for each character
    let currentX = containerRect.left;
    const particles = [];
    
    for (let i = 0; i < inputValue.length; i++) {
      const char = inputValue[i];
      const charWidth = fontSize * (char === ' ' ? 0.5 : 0.6);
      
      // Create 8-12 particles per character
      const particlesPerChar = 8 + Math.floor(Math.random() * 5);
      
      for (let j = 0; j < particlesPerChar; j++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-[1px] pointer-events-none';
        
        // Tiny size (1-2px)
        const size = 1 + Math.random();
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Blurry effect
        particle.style.filter = 'blur(0.5px)';
        
        // Position within character bounds
        const offsetX = Math.random() * charWidth;
        const offsetY = (Math.random() - 0.5) * fontSize;
        
        particle.style.left = `${currentX + offsetX}px`;
        particle.style.top = `${containerRect.top + offsetY + window.scrollY}px`;
        particle.style.position = 'absolute';
        particle.style.zIndex = '9999';
        
        // Color based on character position
        const hue = 255;
        particle.style.backgroundColor = `hsla(${hue}, 100%, 100%, 0.9)`;
        
        document.body.appendChild(particle);
        particles.push(particle);
      }
      
      currentX += charWidth + letterSpacing;
    }

    // Animate all particles simultaneously with slight random delays
    particles.forEach((particle) => {
      const delay = Math.random() * 300;
      
      setTimeout(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 70;
        
        particle.animate(
          [
            {
              transform: 'translate(0, -6rem) scale(1)',
              opacity: 1,
            },
            {
              transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0.1)`,
              opacity: 0,
            },
          ],
          {
            duration: 10000 + Math.random() * 400,
            easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)',
          }
        ).onfinish = () => particle.remove();
      }, delay);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 overflow-hidden p-4">
      <div className="text-center relative mb-8 w-full max-w-md">
        <div className="relative inline-block">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            onClick={(e) => setCursorPosition(e.target.selectionStart)}
            className="px-6 py-4 text-lg border-2 border-blue-500 rounded-full bg-gray-800 bg-opacity-10 text-white outline-none transition-all duration-300 w-full focus:border-red-400 focus:shadow-lg focus:shadow-red-500/50 relative z-10"
            placeholder="Type something and press Enter..."
          />
          <div
            ref={cursorRef}
            className="absolute h-6 w-0.5 bg-white top-1/2 transform -translate-y-1/2 transition-opacity duration-100"
            style={{ 
              opacity: inputValue ? 1 : 0,
              // Add blinking animation
              animation: 'blink 1s step-end infinite'
            }}
          />
        </div>
      </div>
      
      <div 
        ref={textContainerRef} 
        className="text-white text-2xl font-bold mb-4 min-h-8 break-words max-w-md text-center tracking-normal"
      >
        {inputValue}
      </div>

      <div
        className={`text-white mt-5 transition-opacity duration-500 ${
          showMessage ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Text vanished!
      </div>

      <style jsx>{`
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TextParticleInput;