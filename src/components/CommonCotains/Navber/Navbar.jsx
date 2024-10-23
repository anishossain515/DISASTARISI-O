import React, { useState, useEffect } from "react";
import NavItems from "../../Json Data/Data.json";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { NavDetails } from "./NavDetails";
import { Bar } from "../../lib/Icon";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [IsMobileMenu, setIsMobileMenu] = useState(false);
  const location = useLocation(); 
  const [IsActive, setIsActive] = useState(0);

  // Set IsActive based on the current path
  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = NavItems.navItems.findIndex(item => item.link === currentPath);
    if (activeIndex !== -1) {
      setIsActive(activeIndex);
    }
  }, [location.pathname]);

  const ToggleMenu = () => {
    setIsMobileMenu(!IsMobileMenu);
  };

  const activeInfo = NavItems.navItems[IsActive]?.navInfo;

  return (
    <section>
      <div className="bg-Light-Gray flex flex-col pt-2">
        <nav className="xl:px-[85px] px-[20px] lg:px-[40px] flex justify-between items-center">
          <img src="/logo.png" alt="logo" />

          <ul className="lg:flex hidden items-center leading-[17px] lg:gap-[23px] xl:gap-[35px] text-Gray">
            {NavItems.navItems.map(({ label, link }, index) => (
              <li key={index}>
                <NavLink
                  to={link}
                  onClick={() => setIsActive(index)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-[5px] xl:gap-[9px] items-center">
            <Bar
              className="size-[25px] lg:hidden block"
              onClick={ToggleMenu}
            />

            <img src="/notification.png" alt="notification" />

            <div className="sm:flex items-center justify-center gap-[9px] hidden">
              <img src="manicon.png" alt="" />

              <div className="flex flex-col items-start font-onest text-Gray">
                <h2 className="font-[600px]">Usman Zafar</h2>
                <p className="font-semibold">usmanzafar@gmail.com</p>
              </div>
            </div>
          </div>

          {IsMobileMenu && <MobileMenu ToggleMenu={ToggleMenu} IsActive={IsActive} setIsActive={setIsActive} />}
        </nav>

        <div className="mt-[15px] bg-Gray">
          <div className="lg:flex hidden items-center justify-center pr-[135px] xl:pr-[152px] gap-[15px] xl:gap-[24px]">
            {Array.from(Array(6).keys()).map((el) => (
              <div
                key={el}
                className={`w-[80px] h-[3px] rounded-[25%] ${IsActive === el && 'bg-[#09090b]'}`}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-[15px] bg-Gray lg:hidden block"></div>

        {activeInfo && <NavDetails activeInfo={activeInfo} />}
      </div>

      <Outlet />
    </section>
  );
};
