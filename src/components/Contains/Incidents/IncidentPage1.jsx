import React from 'react'
import { Container } from '../../common/Container'
import { IncidentsInfo } from '../../CommonCotains/IncidentsInfo'
import incidentsInfo from '../../Json Data/Data.json'

export const IncidentPage1 = () => {
  return (
    <section>
       <Container>
           
           <div>

           <h1 className='font-onest font-bold text-3xl text-center text-Rich-Black '>Let’s get started</h1>
           <p className='font-onest text-Gray text-center w-[468px] mx-auto pt-[14px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>

           <div className='pt-[33px] flex items-center justify-center gap-[55px]'>

            {
                incidentsInfo.Incidents.map(({image,type,details},index)=>(
                
                     <IncidentsInfo image={image} type={type} details={details} key={index} />
               
                ))
            }
           

           </div>

           </div>

       </Container>
    </section>
  )
}
