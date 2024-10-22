import React from 'react'
import { Input } from '../../common/Input'
import { FirstButton } from '../../common/FirstButton'
import { SecondButton } from '../../common/SecondButton'

export const NavDetails = () => {
  return (
    <section className='lg:px-[60px] px-[20px] xl:px-[86px] mt-[32px] pb-[23px] flex flex-col md:flex-row justify-between items-center'>
         <div className='sm:flex-col flex-row flex items-center sm:items-start sm:gap-0 gap-2'>
            <p className='font-onest font-semibold text-[14px] md:text-[12px] text-Gray'>Welcome back</p>
            <h1 className='font-onest font-semibold text-[26px] text-Rich-Black'>Dashboard</h1>
         </div>

         <div className='flex sm:flex-row flex-col items-center gap-[14px] '>
            <Input/>
           <div className='sm:space-x-[14px] space-x-[10px] flex items-center'>
           <FirstButton>Sort By: Date modified</FirstButton>
           <SecondButton>Cypher AI</SecondButton>
           </div>
         </div>
    </section>
  )
}
