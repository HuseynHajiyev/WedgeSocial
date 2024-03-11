'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { hrefToText } from '@/utils/textManipulation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const route = usePathname();
  const [isActive, setIsActive] = useState(false);
  const defaultClasses =
    'dark:text-light-white-200 rounded-md  hover:bg-light-logo rounded-lg';
  const activeClasses = 'dark:text-light-logo border-b-4 border-b-light-logo ';

  useEffect(() => {
    if (route === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [route, href]);

  return (
    <div
      className={`relative w-[130px] ${isActive ? activeClasses : defaultClasses}`}
    >
      <Link className=' flex justify-center has-tooltip p-3' href={href}>
        <span className='tooltip'>{hrefToText(href)}</span>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
