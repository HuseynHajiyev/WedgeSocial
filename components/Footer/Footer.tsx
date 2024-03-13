import React from 'react';
import Image from 'next/image';
import { LinksArrayInterface } from '@/common.types';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const FooterColumn = ({ title, links }: LinksArrayInterface) => {
  const target =
    title.toLowerCase() === 'created by' ||
    title.toLowerCase() === 'other projects'
      ? '_blank'
      : '_self';
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <ul className='flex flex-col gap-2 text-slate-300'>
        {links.map((link, index) => (
          <Link
            href={link.href}
            target={target}
            key={index}
            className='text-small'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex gap-20 w-full py-4 px-8'>
        <div className='flex items-start flex-col'>
          <Image src={'/logo-invert.svg'} alt='Wedge' width={90} height={90} />
        </div>
        <div className='flex gap-12 w-full'>
          {footerLinks.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>
      </div>
      <div className='flexBetween footer_copyright px-8 py-2 bg-slate-300'>
        <p className='text-slate-800'>© 2024 Wedge. All rights reserved</p>
        <p></p>
        <p className='text-slate-600'>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
