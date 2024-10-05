'use client'

import {
  SiAmazonwebservices,
  SiAndroid,
  SiC,
  SiCisco,
  SiCloudflare,
  SiCplusplus,
  SiDotnet,
  SiEspressif,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGnubash,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTerraform,
  SiTypescript} from '@icons-pack/react-simple-icons'

import { ZapIcon } from 'lucide-react'
import Marquee from 'react-fast-marquee'

const StacksCard = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <Marquee className='py-2' pauseOnHover autoFill={true} direction='right'>
        <SiJavascript className='size-10 mx-2' color='#F7DF1E'/>
        <SiTypescript className='size-10 mx-2' color='#3178C6' />
        <SiTailwindcss className='size-10 mx-2' color='#06B6D4'/>
        <SiReact className='size-10 mx-2' color='#61DAFB' />
        <SiNextdotjs className='size-10 mx-2' />
        <SiExpress className='size-10 mx-2' color='#000000' />
        <SiPython className='size-10 mx-2' color='#3776AB'/>
        <SiKotlin className='size-10 mx-2' color='#7F52FF'/>
        <SiAndroid className='size-10 mx-2' color='#34A853'/>
        <SiDotnet className='size-10 mx-2' color='#512BD4'/>
      </Marquee>
      <Marquee className='py-2' pauseOnHover autoFill={true} direction='right'>
        <SiC className='size-10 mx-2' color='#A8B9CC' />
        <SiCplusplus className='size-10 mx-2' color='#00599C' />
        <SiGnubash className='size-10 mx-2' color='#4EAA25'/>
        <SiLinux className='size-10 mx-2' color='#FCC624'/>
        <SiRaspberrypi className='size-10 mx-2' color='#A22846' />
        <SiEspressif className='size-10 mx-2' color='#E7352C' />
        <SiCisco className='size-10 mx-2' color='#1BA0D7'/>
      </Marquee>
      <Marquee className='py-2' pauseOnHover autoFill={true} direction='right'>
        <SiGit className='size-10 mx-2' color='#F05032'/>
        <SiTerraform className='size-10 mx-2' color='#844FBA'/>
        <SiCloudflare className='size-10 mx-2' color='#F38020'/>
        <SiPostgresql className='size-10 mx-2' color='#4169E1'/>
        <SiPrisma className='size-10 mx-2' color='#2D3748'/>
        <SiMysql className='size-10 mx-2' color='#4479A1'/>
        <SiSqlite className='size-10 mx-2' color='#003B57'/>
        <SiFlutter className='size-10 mx-2' color='#02569B'/>
        <SiAmazonwebservices className='size-10 mx-2' color='#232F3E' />
      </Marquee>
    </div>
  )
}

export default StacksCard
