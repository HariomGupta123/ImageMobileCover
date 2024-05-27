import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import phonetemplatedarkedges from "../../public/phone-template-dark-edges.png"
import phonetemplatewhiteedges from "../../public/phone-template-white-edges.png"
interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string
    dark?:boolean
}
export default function Phone({imgSrc,className,dark=false,...props}:PhoneProps) {
  return (
    <div className={cn('relative pointer-event-none z-50 overflow-hidden',className)}{...props}>
     <Image className= "pointer-event-none z-50 select-none" src={dark ? (phonetemplatedarkedges) : (phonetemplatewhiteedges)} alt="phone image" />
     <div className='absolute -z-10 inset-0'  >
<Image className='object-cover' src={imgSrc} alt='overlaying phone image'/>
     </div>
    </div>
  )
}
