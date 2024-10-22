import React from 'react'

export const IncidentsDes = () => {
  return (
    <div className='w-[180px] h-[69px] rounded-[6px] bg-[#F4F4F5] border-Light-Gray px-[20px] py-[22px] flex items-center gap-[10px] hover:bg-Saffron group cursor-pointer transition-colors duration-150 '>

        <img src="/incidents1.png" alt="incidents" className='group-hover:filter group-hover:brightness-0 group-hover:invert'/>
        <p className='font-onest text-[14px] text-Gray group-hover:text-white'>Avalanche</p>
    </div>
  )
}
