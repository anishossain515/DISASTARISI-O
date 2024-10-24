import React from 'react';
import { Container } from '../../common/Container';
import { IncidentsInfo } from '../../CommonCotains/IncidentsInfo';
import incidentsInfo from '../../Json Data/Data.json';
import { SecondButton } from '../../common/SecondButton';
import { useNavigate } from 'react-router-dom';

export const IncidentPage1 = () => {

  let Navigate = useNavigate()

  const handelChange =()=>{
    Navigate("/IncidentPage2")
  }

  return (
    <section className='mt-[85px]'>
      <Container className='items-center mx-auto flex flex-col px-4'>
        <div>
          <h1 className='font-onest font-bold text-3xl text-center text-Rich-Black'>Let’s get started</h1>
          <p className='font-onest text-Gray text-center sm:text-base text-sm sm:w-[468px] mx-auto pt-[14px]'>
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
          </p>

          <img src="/setpper.png" alt="setpper" className='pt-[33px] mx-auto' />

          <div className='pt-[33px] flex flex-wrap items-center justify-center gap-[55px]'>
            {incidentsInfo.Incidents.map(({ image, type, details }, index) => (
              <IncidentsInfo image={image} type={type} details={details} key={index} />
            ))}
          </div>
        </div>

        <SecondButton className='mt-[85px]' onClick={handelChange}>Get started</SecondButton>
      </Container>
    </section>
  );
};
