import React from 'react'
import { cn } from '../lib/Cn'

export const FirstButton = ({children,className}) => {
  return (
    <button className={cn('font-onest  font-semibold text-[12px] border border-Light Gray rounded-[6px] bg-white text-Gray py-3 px-[10px]',className)}>{children}</button>
  )
}
