import React from 'react'

export const LocationApprox = () => {
  return (
    <div>

        <div className='flex items-center gap-[15px] '>
            <img src="/location.png" alt="Location" />

            <div className='font-onest'>
                <p className='text-Slate-Gray text-[12px] sm:text-[14px]'>Location</p>
                <h2 className='font-bold text-[14px] sm:text-xl text-Rich-Black pt-[8px]'>Tulare County,  Los Angles, CA 23415</h2>
            </div>
        </div>

        
        <div className='flex items-center gap-[15px] pt-[30px] '>
            <img src="/approx.png" alt="Location" />

            <div className='font-onest'>
                <p className='text-Slate-Gray text-[12px] sm:text-[14px]'>Approx. Cost:</p>
                <h2 className='font-bold text-[14px] sm:text-xl text-Rich-Black pt-[8px]'>$60,607,456.00</h2>
            </div>
        </div>

    </div>
  )
}
