'use client';

import React, { useState } from 'react';
import {
  PiCaretCircleDownFill,
  PiCaretCircleUpFill,
  PiPottedPlantFill,
} from 'react-icons/pi';
import { IoStatsChart } from 'react-icons/io5';
import { FcDataBackup } from 'react-icons/fc';

import LeftListItem from './LeftListItem';

const LeftSeeMore = () => {
  const [seeMore, setSeeMore] = useState(false);
  const handleClick = () => {
    setSeeMore((prevstate) => !prevstate);
  };

  return (
    <>
      <div
        className={`grid transition-all  duration-700  ease-in-out ${seeMore ? 'grid-rows-animate-height-open' : 'grid-rows-animate-height-closed'}`}
      >
        <div
          className={`transition-all  duration-700 overflow-hidden ${seeMore ? 'h-[100%]' : 'h-0 '}`}
        >
          <LeftListItem text='Ads Manager'>
            <IoStatsChart size={35} className='text-blue-400' />
          </LeftListItem>
          <LeftListItem text='Climate Science Center'>
            <PiPottedPlantFill size={35} className='text-green-300' />
          </LeftListItem>
          <LeftListItem text='Feeds'>
            <FcDataBackup size={35} />
          </LeftListItem>
        </div>
      </div>
      <div className='w-full h-full select-none' onClick={handleClick}>
        {seeMore ? (
          <LeftListItem text='See Less'>
            <div className='inline w-fit h-fit dark:bg-white rounded-full select-none'>
              <PiCaretCircleUpFill size={35} className='text-slate-800' />
            </div>
          </LeftListItem>
        ) : (
          <LeftListItem text='See More'>
            <div className='inline w-fit h-fit dark:bg-white rounded-full select-none'>
              <PiCaretCircleDownFill size={35} className='text-slate-800' />
            </div>
          </LeftListItem>
        )}
        <div className='flex w-full justify-center p-2'>
          <div className='w-[99%] h-[2px] bg-slate-700' />
        </div>
      </div>
    </>
  );
};

export default LeftSeeMore;
