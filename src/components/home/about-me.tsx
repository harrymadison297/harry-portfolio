'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import LocationCard from './location-card'
import StacksCard from './stacks-card'
import { DownloadIcon } from 'lucide-react'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative mt-8'
    >
      <motion.div
        className='grid gap-4 md:grid-cols-4'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        <div className='md:grid gap-4 hidden'>
          <LocationCard />
        </div>
        <div className='grid gap-4 md:col-span-3'>
          <StacksCard />
        </div>
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link href='/about' className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}>
          Download my CV
          <DownloadIcon className='ml-2 h-4 w-4'/>
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe