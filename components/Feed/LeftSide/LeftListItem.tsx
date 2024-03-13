import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
  text: string;
}

const ListItem = ({ children, text }: ListItemProps) => {
  return (
    <div className='w-full lg:p-2 rounded-md flex justify-start lg:space-x-2 items-center hover:bg-zinc-300 hover:bg-opacity-25 cursor-pointer'>
      {children}
      <span className='hidden md:block text-sm font-semibold dark:text-white select-none'>
        {text}
      </span>
    </div>
  );
};

export default ListItem;
