'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaHouseChimney, FaToolbox, FaEnvelope } from "react-icons/fa6";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: FaHouseChimney },
  {
    name: 'Projects',
    href: '/projects',
    icon: FaToolbox,
  },
  { name: 'Contact', href: '/contact', icon: FaEnvelope },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <nav className='flex items-center justify-evenly p-5 fixed bottom-0 w-full bg-white shadow-footer'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center justify-center gap-2 text-green-600 text-3xl transition-all after:transition-all after:content-[""] after:w-14 after:h-14 after:absolute after:rounded-full',
              {
                'scale-125 -translate-y-4 text-white after:bg-green-600 after:shadow-icon': pathname === link.href,
              },
            )}
          >
            <LinkIcon className='z-50' />
          </Link>
        );
      })}
    </nav>
  );
}
