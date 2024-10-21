import React from 'react'
import { cn } from '../lib/Cn'

export const Container = ({children,className}) => {
  return (
    <div className={cn('w-full mx-auto max-w-screen-[815px] ',className)}>
        {children}
    </div>
  )
}
