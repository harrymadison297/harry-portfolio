'use client'

import { FOOTER_LINKS } from '@/configs/links'
import { StarIcon } from 'lucide-react'
import { Link } from '../ui/link'

const Footer = () => {
  return (
    <footer className='bg-background/30 relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
            {list.links.map((link) => {
              const { href, text } = link

              return (
                <Link key={href} href={href} variant='muted'>
                  {text}
                </Link>
              )
            })}
          </div>
        ))}
      </div>
      <div className='mt-20 flex items-center justify-between text-sm'>
        <div>&copy; {new Date().getFullYear()} Harry</div>
        <Link
          href='https://github.com/harrymadison297/harry-portfolio'
          className='flex items-center justify-center overflow-hidden rounded-md border'
        >
          <div className='bg-muted flex h-8 items-center gap-2 border-r px-2'>
            <StarIcon className='size-4' />
            <span className='font-medium'>Star</span>
          </div>
          <div className='bg-background flex h-8 items-center px-3'>
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
