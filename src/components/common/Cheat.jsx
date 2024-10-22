import React from 'react';
import { cn } from '../lib/Cn'; 

export const Cheat = ({ children, onClick, className }) => {
  return (
    <button
      className={cn("size-[77px] shadow-cheat bg-Saffron rounded-full flex items-center justify-center", className)}
     onClick={onClick}
    >
      {children}
    </button>
  );
};
