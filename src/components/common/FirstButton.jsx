import React from 'react'
import { cn } from '../lib/Cn'

export const FirstButton = ({children,className}) => {
  return (
    <button className={cn('font-onest  font-semibold text-[11px] sm:text-[12px] border border-Light Gray rounded-[6px] bg-white text-Gray py-3 px-[25px]',className)}>{children}</button>
  )
}
