'use client'

import { useEffect, useRef } from 'react';

function Glow() {
  const ref = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const target = e.target;
      // What 'container' will the Glow effect be used within
      const container = target.closest('.container');
      console.log(target)
      // Check whether the container and Glowing Div exists
      if (container && ref.current) {
        
        // Get the width/height and other properties of the container  
        const rect = container.getBoundingClientRect();

        // Subtrack the top/left properties of the container from the entire viewport (screen)
        // THEN place the x/y coordinates of the glow effect
        // This means that when your mouse is hovering WITHIN the container(s)
        // The glow will be placed wherever your cursor is hovering
        const { current } = ref
        const x = e.clientX - rect.left; // Horizontal Positioning
        const y = e.clientY - rect.top; // Vertical Positioning
        
        // Add the Glow effect
        current.style.background = `radial-gradient(${rect.width / 2 }px at ${x}px ${y}px, #42434a44, transparent 80%)`;
        current.style.width = `${rect.width}px`;
        current.style.height = `${rect.height}px`;
        current.style.left = `${rect.left}px`;
        current.style.top = `${rect.top}px`;

        console.log(current)
      } else if (ref.current) {
        ref.current.style.background = 'none'; // Remove glow if outside of container
      }
    };

    // Whenever the cursor moves, within the viewport, call the onMouseMove function 
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      // Cleanup function
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    // Glow effect
    <div
      className="Glow"
      ref={ref}
    />
  );
}

export default Glow

