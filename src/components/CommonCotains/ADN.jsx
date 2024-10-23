import React from 'react'

export const ADN = ({image,name,locationName,loss}) => {
  return (
    <div className='lg:w-[679px]  rounded-[10px] h-[108px] w-[98%] bg-[#F4F4F5] px-[10px]  flex items-center justify-normal gap-[17px] '>

        <img src={image} alt={name} />

        <div className='font-onest '>
            <h2 className='font-bold text-Rich-Black text-sm sm:text-base '>{name}</h2>
            <p className='sm:text-[14px] text-[11px] text-Gray pt-3 '>{locationName}</p>
            <p className='font-bold text-Rich-Black pt-3 '>{loss}</p>
        </div>
    </div>
  )
}
