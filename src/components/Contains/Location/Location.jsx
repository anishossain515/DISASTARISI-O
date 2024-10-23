import React from 'react'
import { Contains } from '../Contains'
import { LocationApprox } from './LocationApprox'
import { Line } from '../../common/Line'
import { Area } from './Area'
import { Activities } from './Activities'
import { Document } from './Document'

export const Location = () => {
  return (
    <section className='mt-10'>

        <Contains className='px-[70px] max-w-[1300px] mx-auto flex flex-col-reverse xl:items-start items-center xl:flex-row gap-[94px]'>

            {/* first part start  */}

            <div className='md:w-[680px] w-[300px] sm:w-[500px]'>

              <LocationApprox/>

               <Line/>

               {/* description */}
               <div className='font-onest pt-10'>
                 <h3 className='font-bold text-[14px] text-black '>Description</h3>
                 <p className='text-Gray sm:text-base text-sm pt-[15px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
               </div>

               <Line/>

               {/* area */}
               <Area/>

               <Line/>

              {/* Activity */}
               <Activities/>

               <Line/>

              {/* Document  */}
              <Document/>

               <Line/>
            

            </div>

            {/* first part end */}

            {/* second part  */}
            <div className='space-y-5 font-onest '>
                <p className='text-[14px] text-Gray'>Incident Map</p>
                <img src="/map.png" alt="map"  className='w-auto h-auto object-cover'/>
                <p className='sm:text-sm text-[11px] text-Gray'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
            </div>


        </Contains>

        

    </section>
  )
}