'use client'

import { useEffect, useState } from "react";

const Circle = ({ degree, color, label }) => {
    const [currentDegree, setCurrentDegree] = useState(0);
  
    useEffect(() => {
      let degreeCount = 0;

      const interval = setInterval(() => {

        if (degreeCount < degree) {
          degreeCount++;
          setCurrentDegree(degreeCount);
        } else {
          clearInterval(interval);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, [degree]);
  
    return (
      <div
        className='circle'
        style={{ background: `conic-gradient(${color} ${currentDegree}%, #222 0%)` }}
      >
        <h2 className="number">{currentDegree} <span>%</span></h2>
        <h4>{label}</h4>
      </div>
    );
  };

export default Circle