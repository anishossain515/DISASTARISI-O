import React, { useState } from "react";
import NavItems from "../../Json Data/Data.json";
import { NavLink, Outlet } from "react-router-dom";
import { NavDetails } from "./NavDetails";
import { Bar } from "../../lib/Icon";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [IsMobileMenu,setIsMobileMenu] = useState(false)

  const ToggleMenu = ()=>{
    setIsMobileMenu(!IsMobileMenu)
  }
  return (
    <section>
      
      <div className="bg-Light-Gray flex flex-col pt-2">

      <nav className="xl:px-[85px] px-[20px] lg:px-[40px] flex justify-between items-center  ">
        <img src="/logo.png" alt="logo" />

        <ul className="lg:flex hidden items-center lg:gap-[23px] xl:gap-[35px] text-Gray">
          {NavItems.navItems.map(({ label, link }, index) => (
            <li key={index}>
              <NavLink to={link}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-[5px] xl:gap-[9px] items-center">

            <Bar className='size-[25px]  lg:hidden block' onClick={ToggleMenu}/>
        
          <img src="/notification.png" alt="notification" />

          <div className="sm:flex items-center justify-center gap-[9px]  hidden">
            <img src="manicon.png" alt="" />

            <div className="flex flex-col items-start font-onest text-Gray">
              <h2 className="font-[600px]">Usman Zafar</h2>
              <p className="font-semibold">usmanzafar@gmail.com</p>
            </div>
          </div>


        </div>

        {IsMobileMenu && <MobileMenu ToggleMenu={ToggleMenu}/>}

        </nav>
        
      <div className="border border-Gray mt-[15px]"></div>
        
      <NavDetails />

      </div>

      <Outlet/>

     

    </section>
  );
};
