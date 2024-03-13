import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FcCalendar } from 'react-icons/fc';
import { FcClock } from 'react-icons/fc';
import { FcBookmark } from 'react-icons/fc';
import { HiUserGroup } from 'react-icons/hi2';
import { PiMonitorPlayFill } from 'react-icons/pi';
import { AiFillShop } from 'react-icons/ai';

import LeftSidebarLink from './LeftSidebarLink';
import Image from 'next/image';
import LeftSeeMore from './LeftSeeMore';

const LeftSidebar = () => {
  const userName = 'Huseyn Hajiyev';
  return (
    <div className='lg:min-w-[310px] lg:max-w-[360px] w-[6rem] noSelect pb-2'>
      <div className='flex flex-col lg:space-y-2 pb-2'>
        <LeftSidebarLink text={userName} href='/profile'>
          <Image
            src='/avatar.png'
            alt='Profile Picture'
            width={40}
            height={40}
            className='rounded-full'
          />
        </LeftSidebarLink>
        <LeftSidebarLink text='friends' href='/'>
          <FaUserFriends size={35} className='text-light-logo' />
        </LeftSidebarLink>
        <LeftSidebarLink text='events' href='/'>
          <FcCalendar size={35} />
        </LeftSidebarLink>
        <LeftSidebarLink text='memories' href='/'>
          <FcClock size={35} className='dark:text-black' />
        </LeftSidebarLink>
        <LeftSidebarLink text='saved' href='/'>
          <FcBookmark size={35} />
        </LeftSidebarLink>
        <LeftSidebarLink text='groups' href='/'>
          <div className='dark:bg-light-logo rounded-full'>
            <HiUserGroup size={35} />
          </div>
        </LeftSidebarLink>
        <LeftSidebarLink text='video' href='/watch'>
          <PiMonitorPlayFill size={35} className='text-light-logo' />
        </LeftSidebarLink>
        <LeftSidebarLink text='marketplace' href='/'>
          <AiFillShop size={35} className='text-light-logo' />
        </LeftSidebarLink>
        <LeftSeeMore />
      </div>
    </div>
  );
};

export default LeftSidebar;
