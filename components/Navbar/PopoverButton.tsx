import { hrefToText } from '@/utils/textManipulation';
import React from 'react';

interface PopoverProps {
  href: string;
  children: React.ReactNode;
}

const PopoverButton = ({ href, children }: PopoverProps) => {
  return (
    <div className=' relative flex items-center h-fit w-fit rounded-full p-2 dark:bg-light-logo hover:dark:bg-light-logo-hover has-tooltip cursor-pointer'>
      <span className='tooltip'>{hrefToText(href)}</span>
      {children}
    </div>
  );
};

export default PopoverButton;
