import React from 'react'
import { cn } from '../lib/Cn'

export const Container = ({children,className}) => {
  return (
    <div className={cn('w-full max-w-[815px] mx-auto ',className)}>     
        {children}
    </div>
  )
}
