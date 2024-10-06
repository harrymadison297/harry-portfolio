'use client'

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
    <div className='mb-16 mt-6 sm:mb-24 sm:mt-12'>
      <motion.h1
        className='my-4 text-4xl font-bold md:text-5xl'
        initial={{
          y: -40,
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
        Projects
      </motion.h1>
      <motion.h2
        className='text-muted-foreground mb-8'
        initial={{
          y: -40,
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
        Greeting! This is some of my work.
        <br/>Hope you can find something interesting in here.
        <br/>Happy coding!
      <Separator className='absolute inset-x-0 translate-y-2 sm:translate-y-6 max-w-3xl m-auto' />
      </motion.h2>
      
    </div>
    </>
  );
}