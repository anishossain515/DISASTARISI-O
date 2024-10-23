import React from 'react'
import { Container } from '../../common/Container'

export const IncidentPage4 = () => {
  return (
    <section>
        <Container>
        <h1 className='font-onest font-bold text-2xl text-Rich-Black  '>Where’s the incident?</h1>
        <p className='font-onest text-Gray text-[14px] pt-[12px] pb-[24px]'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
         
         <img src="/In4.png" alt=""  className='w-[752px] h-[490px] object-cover'/>
        </Container>
    </section>
  )
}
