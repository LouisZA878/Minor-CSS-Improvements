'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const page = () => {

    const parallaxContainer = useRef(null)
    const { scrollYProgress } = useScroll({
        target: parallaxContainer,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])


    const images =  [
        {
            scale: scale4,
            url: 'https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc='
        },
        {
            scale: scale5,
            url: 'https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.jpg?s=612x612&w=0&k=20&c=UQ4ZHZk0H_c75Vy9Wv5VaXn00obvPT98LMTOvjXZOWc='
        },
        {
            scale: scale6,
            url: 'https://media.istockphoto.com/id/864526000/video/aerial-calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-hood-in-the.jpg?s=640x640&k=20&c=6d82hTakBOB2JAVVk8YivraNbzd_Uyk0pFBuFJp68qY='
        },
        {
            scale: scale5,
            url: 'https://media.istockphoto.com/id/181013019/video/the-perfect-mountain-aerial-shot.jpg?s=640x640&k=20&c=PLZ603AQQt-tyKDLCYoJ4kAyXS8kfEt1Krrffq5Te9w='
        },
        {
            scale: scale6,
            url: 'https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.jpg?s=612x612&w=0&k=20&c=UQ4ZHZk0H_c75Vy9Wv5VaXn00obvPT98LMTOvjXZOWc='
        },
        {
            scale: scale8,
            url: 'https://media.istockphoto.com/id/864526000/video/aerial-calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-hood-in-the.jpg?s=640x640&k=20&c=6d82hTakBOB2JAVVk8YivraNbzd_Uyk0pFBuFJp68qY='
        },
        {
            scale: scale9,
            url: 'https://media.istockphoto.com/id/181013019/video/the-perfect-mountain-aerial-shot.jpg?s=640x640&k=20&c=PLZ603AQQt-tyKDLCYoJ4kAyXS8kfEt1Krrffq5Te9w='
        }
    ]


  return (
  <div className='body-mimic'>
  <div ref={parallaxContainer} className='parallax-container'>
    <div className='sticky-section'>
        {
            images.map(({ scale, url }, index) => {


                return <motion.div
                className='el'
                style={{ scale }}
                key={index}>
                <div
                
                className='zoom-image-container'>
                    <img
                        src={url}
                    />
                </div>
            </motion.div>
            })
        }

    </div>
  </div>
  </div>
  )
}

export default page