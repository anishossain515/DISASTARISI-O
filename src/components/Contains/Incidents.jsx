import React from 'react'
import { Contains } from './Contains'
import DisastersInfo from '../Json Data/Data.json'
import { Disasters } from '../CommonCotains/Disasters'

export const Incidents = () => {
  return (
    <section className="mt-10">
       <Contains className="flex relative px-[50px] md:px-[70px] max-w-[1517px] flex-wrap gap-[25px] justify-items-center">
        {DisastersInfo.disasters.map(({ image, place, area, loss }, index) => (
          <Disasters
            key={index}
            image={image}
            place={place}
            area={area}
            loss={loss}
          />
        ))}
       </Contains>
    </section>
  )
}
