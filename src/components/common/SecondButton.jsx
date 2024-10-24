import React from 'react'
import { cn } from '../lib/Cn'



export const SecondButton = ({children,className ,onClick}) => {
  return (
  <button onClick={onClick} className={cn("inline-flex items-center gap-[5px] text-white text-sm sm:text-base bg-Saffron rounded-[6px] py-[8px] px-[25px]",className)}>

    {children}

  </button>
  
   
  )
}
