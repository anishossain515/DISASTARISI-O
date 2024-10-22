import React from 'react'

export const ADN = () => {
  return (
    <div className='lg:w-[679px] m-2 rounded-[10px] w-[80%] bg-[#F4F4F5] px-[10px] py-[15px] flex items-center justify-normal gap-[17px] '>

        <img src="/ADN.png" alt="ADN" />

        <div className='font-onest '>
            <h2 className='font-bold text-Rich-Black text-[16px] '>Activity name</h2>
            <p className='text-[14px] text-Gray pt-[10px] '>Location name 16.12212, -122.1424</p>
            <p className='font-bold text-Rich-Black pt-[10px] '>$1,456,654.00</p>
        </div>
    </div>
  )
}
