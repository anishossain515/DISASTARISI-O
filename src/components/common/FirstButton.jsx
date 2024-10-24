import React from 'react'
import { cn } from '../lib/Cn'

export const FirstButton = ({children,className,onClick}) => {
  return (
    <button onClick={onClick} className={cn('font-onest  font-semibold text-[11px] sm:text-[12px] border border-Light Gray rounded-[6px] bg-white text-Gray px-2 py-2 sm:py-3 sm:px-[25px]',className)}>{children}</button>
  )
}
