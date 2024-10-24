import React from "react";
import { useNavigate } from "react-router-dom";
import { NavDetails } from "../../CommonCotains/Navber/NavDetails";
import { Container } from "../../common/Container";
export const IncidentPage4 = () => {
    
    let Navigate = useNavigate()
      
    const handelNavigateNext = () =>{
      Navigate("/location")
    }

    {Navigate("/location")};
    
    const handelNavigateBack = ()=>{
      Navigate("/IncidentPage3")
    }
      return (
        <>
        <NavDetails
          NavInfo="Home - Incidents - New Incident"
          NavName="New Incident"
          FirstBtnInfo="Back"
          SecondBtnInfo="Finished"
          P="text-[12px]"
          H="text-[26px]"
          Delete="/delete.png"
          Bar="/Bar.png"
          SecondBtnClick={handelNavigateNext}
          FirstBtnClick={handelNavigateBack}
        />

        <section className="mt-10">
          <Container className="px-4">
            <h1 className="font-onest font-bold text-xl sm:text-2xl text-Rich-Black  ">
              Where’s the incident?
            </h1>
            <p className="font-onest text-Gray text-[14px] pt-[12px] pb-[24px]">
              Enter a GPS, address. or pin point on the map. Try to be as
              accurate as possible, or click:Jurisdiction Wide
            </p>

            <img
              src="/In4.png"
              alt=""
              className="lg:w-[752px] w-auto h-auto lg:h-[490px] object-cover"
            />
          </Container>
        </section>
      </>
      );
 
};
