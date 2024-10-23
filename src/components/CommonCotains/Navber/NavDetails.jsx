import React, { act } from 'react';
import { Input } from '../../common/Input';
import { FirstButton } from '../../common/FirstButton';
import { SecondButton } from '../../common/SecondButton';

export const NavDetails = ({ activeInfo ,isLocationSection}) => {
  return (
    <section className='lg:px-[60px] px-[20px] xl:px-[86px] mt-[32px] pb-[23px] flex flex-col md:flex-row justify-between items-center'>
      <div className='flex-col  flex items-center sm:items-start sm:gap-0 gap-2'>
        {activeInfo && (
          <>
            <p className='font-onest font-semibold text-[14px] md:text-[12px] text-Gray'>
              {activeInfo.navDes}
            </p>
            <h1 className='font-onest flex items-center justify-center gap-[3.5px] font-semibold text-[26px] text-Rich-Black'>
              {activeInfo.navImg && <img src={activeInfo.navImg} alt="navImg" className='pr-[3.5px]' /> }
              {activeInfo.navName}
            </h1>
          </>
        )}
      </div>

      <div className='flex sm:flex-row flex-col items-center gap-[14px]'>
        <Input />
        <div className='sm:space-x-[14px] space-x-[10px] flex items-center'>
          <FirstButton>Sort By: Date modified</FirstButton>
          <SecondButton> {activeInfo.btnImage && <img src={activeInfo.btnImage} alt="btnImage" /> } {activeInfo.btnName}</SecondButton>
        </div>
      </div>
    </section>
  );
};
