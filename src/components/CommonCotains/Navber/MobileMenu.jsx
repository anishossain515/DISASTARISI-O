import React from 'react'
import NavItems from "../../Json Data/Data.json";

export const MobileMenu = ({ToggleMenu}) => {
  return (
    <section className='w-full h-screen absolute top-0 left-0 z-50 bg-white p-6'>

        <div className='flex justify-between items-center'>
         
         <img src="/logo.png" alt="logo" />
         <button onClick={ToggleMenu} className='text-3xl' aria-level='Close Menu'>&times;</button>

        </div>

        <ul className='pt-6 space-y-2 text-Gray '>
         {NavItems.navItems.map(({ label, link }, index) => (
            <li key={index}>
              <a to={link}>{label}</a>
            </li>
         ))} 
        </ul>

        <div className='gap-[14px] pt-8 flex items-center '>

        <img src="manicon.png" alt="" />

        <div className="flex flex-col items-start font-onest text-Gray">
              <h2 className="font-[600px]">Usman Zafar</h2>
              <p className="font-semibold">usmanzafar@gmail.com</p>
        </div>

        </div>

    </section>
  )
}
