'use client'

import { motion, useAnimate } from 'framer-motion'
import Image from 'next/image';
import { useEffect } from 'react'
import HarryCover from '@/assets/images/Harry.png'

const TEXTS = [
    {
        text: 'amazing',
        className:
            'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
    },
    {
        text: 'stunning',
        className:
            'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
    },
    {
        text: 'fantastic',
        className:
            'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
    },
    {
        text: 'amazing',
        className:
            'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
    }
]

const Hero = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        void animate(
            [
                [scope.current, { y: '0%' }, { duration: 0 }],
                [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
            ],
            {
                repeat: Number.POSITIVE_INFINITY
            }
        )
    }, [animate, scope])

    return (
        <div className='mt-16 space-y-6'>
            <div className='flex justify-between gap-8'>
                <motion.div
                    className='flex flex-col gap-4 md:max-w-xl'
                    initial={{
                        y: 40,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <h1 className='font-title bg-gradient-to-b from-black via-black/90 to-black/80 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70'>
                        I&apos;m Harry, a Software Developer creating{' '}
                        <div className='inline-grid h-9 overflow-hidden sm:h-14'>
                            <div ref={scope}>
                                {TEXTS.map(({ text, className }, i) => (
                                    <div className={className} key={i}>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>{' '}
                        software solution.
                    </h1>
                    <div className='text-muted-foreground text-sm'>Ha Noi • UTC/GMT +7</div>
                </motion.div>
                <motion.div
                    className='relative size-48 md:block'
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}
                    transition={{
                        duration: 0.3
                    }}
                >
                    <Image
                        src={HarryCover}
                        className='rounded-full'
                        width={200}
                        height={200}
                        alt='Harry'
                    />
                    <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero