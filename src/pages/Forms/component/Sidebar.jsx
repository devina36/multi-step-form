import React from 'react';
import { SidebarDekstop, SidebarMobile } from '../../../assets/images';

const Sidebar = ({ stepItem, step, setStep }) => {
  return (
    <div className="absolute -z-10 md:z-0 top-0 w-full md:w-[274px] h-full md:relative">
      <picture>
        <source
          media="(max-width:768px)"
          srcset={SidebarMobile}
          className="w-screen h-auto"
        />
        <img
          src={SidebarDekstop}
          className="md:w-[274px] w-screen h-auto md:h-full"
        />
      </picture>
      <div className="absolute w-full h-full top-0">
        <div className=" flex justify-center items-center md:justify-start md:items-start md:flex-col gap-4 py-[31px] md:gap-y-[32px] md:px-[32px] md:py-[38.5px] ">
          {stepItem.map((item) => {
            return (
              <div key={item.title} className=" flex items-center gap-4">
                <span
                  className={`w-[33px] text-sm leading-relaxed font-bold h-[33px] flex justify-center items-center rounded-full ${
                    step === item.value
                      ? 'text-black bg-light-blue'
                      : 'border border-white text-white'
                  }`}
                >
                  {item.value}
                </span>
                <span className="text-start hidden md:block ">
                  <p className="text-sm text-light-gray leading-snug font-thin tracking-[-0.075em]">
                    STEP {item.value}
                  </p>
                  <p className="text-sm text-white leading-none font-bold tracking-wider">
                    {item.title}
                  </p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
