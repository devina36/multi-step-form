import React from 'react';
import { SidebarDekstop } from '../../../assets/images';

const Sidebar = ({ stepItem, step, setStep }) => {
  return (
    <div className="h-full w-fit relative">
      <img src={SidebarDekstop} className="h-full w-[274px]" />
      <div className="absolute w-full h-full top-0">
        <div className=" flex flex-col gap-y-[32px] px-[32px] py-[38.5px]">
          {stepItem.map((item) => {
            return (
              <button
                key={item.title}
                className=" flex items-center gap-4"
                onClick={() => setStep(item.value)}
              >
                <span
                  className={`w-[33px] text-sm leading-relaxed font-bold h-[33px] flex justify-center items-center rounded-full ${
                    step === item.value
                      ? 'text-black bg-light-blue'
                      : 'border border-white text-white'
                  }`}
                >
                  {item.value}
                </span>
                <span className="text-start">
                  <p className="text-sm text-light-gray leading-snug font-thin tracking-[-0.075em]">
                    STEP {item.value}
                  </p>
                  <p className="text-sm text-white leading-none font-bold tracking-wider">
                    {item.title}
                  </p>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
