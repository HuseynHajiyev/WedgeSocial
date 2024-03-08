import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { PiChatCircleText } from "react-icons/pi";





const Navbar = () => {
  const session = true
  return (
    <nav className='flexBetween navbar bg-light-primary text-light-top text-slate-800 sticky top-0'>
      <Link href='/'>
        <Image 
          src='/logo.svg'
          alt='Wedge' 
          width={70} 
          height={70} 
        /> 
      </Link>
      <ul className="xl:flex hidden text-small gap-7 navbar-links-color navbar-links-rounded">
        <Link href='/'>
          <RiHome2Line size={21} />
        </Link>
        <Link href='/messages'>
          <PiChatCircleText size={21} />
        </Link>
      </ul>
      <>
        {session ? (
          <div className='flexBetween gap-x-4 navbar-links-color navbar-links-round'>          
            <Link href='/notifications'>
              <FaRegBell size={21} />
            </Link>
            <Link href='/profile'>
              <FaRegUser size={21} />
            </Link>
          </div>
        ) : (
          <div className="navbar-links-color navbar-links-rounded">
            <Link href='/login'>
              <button className='btn btn-primary  rounded'>Login</button>
            </Link>
          </div>
        )}
      </>
    </nav>
  )
}

export default Navbar