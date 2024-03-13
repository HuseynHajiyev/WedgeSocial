import { capitalize } from '@/utils/textManipulation';
import Link from 'next/link';
import React from 'react';
import ListItem from './LeftListItem';

interface LeftSidebarLinkProps {
  children: React.ReactNode;
  text: string;
  href: string;
  disabled?: boolean;
}

const LeftSidebarLink = ({
  children,
  text,
  href,
  disabled,
}: LeftSidebarLinkProps) => {
  const linkTo = capitalize(text);
  return (
    <Link
      href={href}
      className={disabled ? 'pointer-events-none' : ''}
      aria-disabled={disabled}
    >
      <ListItem text={linkTo}>{children}</ListItem>
    </Link>
  );
};

export default LeftSidebarLink;
