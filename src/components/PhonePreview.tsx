"use client"

import { CaseColor } from "@prisma/client"
import { useEffect, useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"
import { cn } from "@/lib/utils"

function PhonePreview({croppedImageUrl,color}:{croppedImageUrl:string,color:CaseColor}) {
    const ref=useRef<HTMLDivElement>(null)
    const [renderedDimensions,setRenderedDimension]=useState({height:0,width:0})
    const handleResize=()=>{
        if(!ref.current) return
        const {width,height}=ref.current.getBoundingClientRect()
        setRenderedDimension({width,height})
    }
    useEffect(()=>{
        handleResize()
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[])
  return (
    <div>
        <AspectRatio ref={ref} className="relative" ratio={3000/2001 }>
        <div className="absolute z-20 scale-[1.0352]" style={{left:renderedDimensions.width/2 - renderedDimensions.width/(1216/121),
            top:renderedDimensions.height /6.22
        }}>
            <Image width={renderedDimensions.width/(3000/637)}  className={cn("phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t[30px] md:rounded-b-[20px]")} src={croppedImageUrl} alt="phone preview"/>

        </div>
        <div className="relative h-full w-full  rounde">
            <Image alt="phone" src='/clearphone' className="pointer-event-none h-full antialiased rounded-md"  />

        </div>


        </AspectRatio>
      
    </div>
  )
}

export default PhonePreview
