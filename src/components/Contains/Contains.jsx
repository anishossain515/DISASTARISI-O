import React from 'react'
import { cn } from '../lib/Cn'

export const Contains = ({children,className}) => {
  return (
    <div className={cn('w-full mx-auto  max-w-screen-[1300px]',className)}>
        {children}
    </div>
  )
}
