'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const page = () => {
    const swapContainer = useRef(null)
    const { scrollYProgress } = useScroll({
        target: swapContainer,
        offset: ['start start', 'end end']
    })
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.8]
    )
    const rotate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -5]
    )
    const scale2 = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    )
    const rotate2 = useTransform(
        scrollYProgress,
        [0, 1],
        [-5, 0]
    )

  return (
    <div ref={swapContainer} className='parallax-swap-container'>
        <motion.div style={{ scale, rotate }}></motion.div>
        <motion.div style={{ scale: scale2, rotate: rotate2 }}></motion.div>

    </div>
  )
}

export default page