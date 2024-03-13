import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import './Navbar.css';
import { MdHomeFilled } from 'react-icons/md';
import { LuMonitorPlay } from 'react-icons/lu';
import { FaRegBell } from 'react-icons/fa';
import { TbSearch } from 'react-icons/tb';
import { RiGamepadLine } from 'react-icons/ri';
import { IoApps } from 'react-icons/io5';

import { CiShop } from 'react-icons/ci';

// import { PiChatCircleText } from 'react-icons/pi';
import NavLink from './NavLink';
import PopoverButton from './PopoverButton';
import { PiChatCircleText } from 'react-icons/pi';

const Navbar = () => {
  const session = true;

  return (
    <nav className='flexBetween navbar paddingsX dark:bg-dark-blue-600 sticky top-0'>
      {/* {Left Side} */}
      <div className='flex xl:space-x-4 space-x-2'>
        <div>
          <Link href='/'>
            <Image src='/logo.svg' alt='Wedge' width={50} height={50} />
          </Link>
        </div>
        <div className='lg:flex hidden items-center'>
          <form>
            <label className='mb-2 text-sm font-medium dark:text-light-white-200 sr-only dark:text-white'>
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-light-white-200 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='search'
                className='block w-full outline-0 bg-[#3A3B3C] ps-10 p-2 rounded-full text-light-white-200'
                placeholder='Search'
                required
              />
            </div>
          </form>
        </div>
        <div className='lg:hidden blockinset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <PopoverButton href='/search'>
            <TbSearch size={25} />
          </PopoverButton>
        </div>
      </div>
      {/* {End Left Side} */}
      {/* {Center} */}
      <div className='lg:flex hidden justify-center items-center lg:space-x-4'>
        <NavLink href='/'>
          <MdHomeFilled size={25} />
        </NavLink>
        <NavLink href='/watch'>
          <LuMonitorPlay size={25} />
        </NavLink>
        <NavLink href='/marketplace'>
          <CiShop className='stroke-1' size={25} />
        </NavLink>
        <NavLink href='/gaming'>
          <RiGamepadLine size={25} />
        </NavLink>
      </div>
      {/* {End Center} */}

      {/* {Right side} */}
      <>
        {session ? (
          <div className='flex justify-end items-center space-x-2 navbar-links-bg'>
            <PopoverButton href='/profile'>
              <IoApps size={25} />
            </PopoverButton>
            <PopoverButton href='/messages'>
              <PiChatCircleText size={25} />
            </PopoverButton>
            <PopoverButton href='/notifications'>
              <FaRegBell size={25} />
            </PopoverButton>
            <div className='w-25 h-25 relative has-tooltip cursor-pointer	'>
              <span className='tooltip'>Profile</span>
              <div className='rounded-full w-full h-full absolute hover:bg-zinc-300 hover:bg-opacity-25' />
              <Image
                src='/avatar.png'
                alt='Wedge'
                width={50}
                height={50}
                className='rounded-full'
              />
            </div>
          </div>
        ) : (
          <div className='navbar-links-bg navbar-links-rounded'>
            <Link href='/login'>
              <button className='btn btn-primary  rounded'>Login</button>
            </Link>
          </div>
        )}
      </>
      {/* {End Right Side} */}
    </nav>
  );
};

export default Navbar;
