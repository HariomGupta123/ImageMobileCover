"use client"
import React, { useRef } from 'react'
import whatpeaplearebuying from "../../public/what-people-are-buying.png"
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { useInView } from 'framer-motion'
const PHONES=[
    '/testimonials/1.jpg',
    '/testimonials/2.jpg',
    '/testimonials/3.jpg',
    '/testimonials/4.jpg',
    '/testimonials/5.jpg',
]
function splitArray<T>(array:Array<T>,numParts:number){
    const result:Array<Array<T>>=[]
    for (let i = 0; i < array.length; i++) {
        const index = i % numParts;
        if(!result[index]){
            result[index]=[]
        }
        result[index].push(array[i])
    }
   
}
function ReviewGrid(){
    const constainerRef=useRef<HTMLDivElement | null>(null);
    const isInVeiw=useInView(constainerRef,{once:true,amount:0.4});
    const columns=splitArray(PHONES,3)
    return <div ref={constainerRef} className='relative -max-4 mt-16 grid h-[49rem] max-h-[15vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 ' ></div>
}
export default function Reviews() {
  return (
   <MaxWidthWrapper className='relative max-w-5xl'>
    <Image aria-hidden='true' src={whatpeaplearebuying} alt="" className='absolute select-none hidden xl:block -left-32 top-1/3' />
   </MaxWidthWrapper>
  )
}
