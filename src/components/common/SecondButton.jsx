import React from 'react'
import { cn } from '../lib/Cn'



export const SecondButton = ({children,className}) => {
  return (
  <button className={cn("inline-flex items-center gap-[5px] bg-Saffron rounded-[6px] py-[8px] px-[25px]",className)}>

    {children}

  </button>
  
   
  )
}
