'use client';

import { motion } from 'framer-motion';
import useSparkles from '@/Store/useSparkles';

const SparkComponent = () => {
  const { sparks, addSpark, removeSpark } = useSparkles();

  const randomTransitionValue = () => {
    return `${Math.random() * 400 - 200}`;
  };

  const spark = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const newSpark = {
      id: Date.now(),
      x: event.clientX - rect.left, 
      y: event.clientY - rect.top,
      scale: Math.random() * 2 + 1,
      trans_x: `${randomTransitionValue()}px`,
      trans_y: `${randomTransitionValue()}px`,
    };
    addSpark(newSpark);

    setTimeout(() => {
      removeSpark(newSpark.id);
    }, 1000);
  };

  return (
    <div onMouseMove={spark} className='glass-container'>
      {sparks.map((spark) => (

        <motion.div
        className='sparks'
        key={spark.id}
        initial={{
          opacity: 1
        }}
        animate={{
          scale: spark.scale,
          x: spark.trans_x,
          y: spark.trans_y,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        style={{
          left: spark.x,
          top: spark.y,
          position: 'absolute'
        }}
      >
      </motion.div>
))}
    </div>
  );
};

export default SparkComponent;
