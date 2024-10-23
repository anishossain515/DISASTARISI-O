import React, { useState } from 'react'

export const IncidentsDes = ({image,name}) => {
   const [IsSelect,setIsSelect] = useState(false)

   const ToggleSelect = ()=>{
     setIsSelect(!IsSelect)
   }
  return ( 
    <button onClick={ToggleSelect} className={`w-[180px] h-[69px] rounded-[6px]  border-Light-Gray px-[20px] py-[22px] flex items-center gap-[10px]  cursor-pointer transition-colors duration-150 ${IsSelect ? 'bg-Saffron' : 'bg-[#F4F4F5]'} `}>

        <img src={image} alt={name} className={`${IsSelect ? 'filter brightness-0 invert' : ''}`}/>
        <p className={`font-onest text-[14px]  ${IsSelect ? "text-white":'text-Gray'}`}>{name}</p>
    </button>
  )
}
