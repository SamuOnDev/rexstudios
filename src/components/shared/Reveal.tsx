'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    useEffect(() => {
        if (inView) {
        controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay }}
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        }}
        className={className}
        >
        {children}
        </motion.div>
    )
}
