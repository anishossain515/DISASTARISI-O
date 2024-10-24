import React, { act } from 'react';
import { Input } from '../../common/Input';
import { FirstButton } from '../../common/FirstButton';
import { SecondButton } from '../../common/SecondButton';

export const NavDetails = ({NavInfo,NavName,FirstBtnInfo,SecondBtnInfo, BtnSrc,SecondBtnClick,NavSrc,P,H}) => {
  return (
    <section className='lg:px-[60px] bg-Light-Gray px-[20px] xl:px-[86px] pt-[32px] pb-[23px] flex flex-col md:flex-row justify-between items-center'>
      <div className='flex-col  flex items-center sm:items-start  gap-2'>
           <p className={`font-onest font-semibold  text-Gray ${P}`}>
              {NavInfo}
            </p>

            <h1 className={`font-onest flex items-center justify-center gap-[3.5px] font-semibold text-Rich-Black ${H}`} >
              {NavSrc && <img src={NavSrc} alt="navImg" className='pr-[3.5px]' /> }
              {NavName}
            </h1>
      </div>

      <div className='flex sm:flex-row flex-col items-center gap-[14px]'>
        <Input />
        <div className='sm:space-x-[14px] space-x-[5px] flex items-center'>
          <FirstButton>{FirstBtnInfo}</FirstButton>
         <SecondButton onClick={SecondBtnClick} >{ BtnSrc &&  <img src={ BtnSrc} alt='img' />} {SecondBtnInfo}</SecondButton>
        </div>
      </div>
    </section>
  );
};
