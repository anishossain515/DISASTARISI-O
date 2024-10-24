import React from 'react'
import { Container } from '../../common/Container'
import ChooseIncidentsInfo from '../../Json Data/Data.json'
import { IncidentsDes } from '../../CommonCotains/IncidentsDes'
import { NavDetails } from '../../CommonCotains/Navber/NavDetails'
import { useNavigate } from 'react-router-dom'

export const IncidentPage2 = () => {

    let Navigate = useNavigate()

    const handelNavigateNext =()=>{
        Navigate('/IncidentPage3')
    }

    const handelNavigateBack = ()=>{
        Navigate("/IncidentPage1")
    }

  return (
   <>
     <NavDetails
        NavInfo="Home - Incidents - New Incident"
        NavName="New Incident"
        FirstBtnInfo="Back"
        SecondBtnInfo="Next step"
        P='text-[12px]'
        H='text-[26px]'
        Delete='/delete.png'
        Bar='/Bar.png'
        SecondBtnClick={handelNavigateNext}
        FirstBtnClick={handelNavigateBack}
      />

     <section className='mt-10'>
        <Container>
            <h1 className='font-onest font-bold text-2xl text-Rich-Black  '>Which of these best describes the incident?</h1>

            <div className='flex flex-wrap gap-[11px] pt-[25px]'>
                {
                    ChooseIncidentsInfo.ChooseIncidents.map(({image,name},index)=>(
                        <IncidentsDes image={image} name={name} key={index} />
                    ))
                }
            </div>
        </Container>
    </section>
   </>
  )
}
