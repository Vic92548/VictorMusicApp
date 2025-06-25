'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

const routes = [
  {
    href: '/dashboard',
    label: 'Dashboard',
  },
  {
    href: '/library',
    label: 'Library',
  },
  {
    href: '/browse',
    label: 'Browse',
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="bg-darker-gray border-b border-border-dark">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold text-white">
            Victor Music
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === route.href
                    ? 'text-white'
                    : 'text-light-gray'
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
