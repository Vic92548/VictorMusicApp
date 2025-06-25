'use client';

import Link from 'next/link';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Search', icon: Search, href: '/search' },
  { name: 'Your Library', icon: Library, href: '/library' },
];

export function Sidebar() {
  return (
    <div className="hidden md:flex flex-col gap-6 w-64 bg-nordic-gray p-4">
      <div className="space-y-6">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-4 p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors',
                item.href === '/' && 'text-white bg-gray-800'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="space-y-2 pt-4 border-t border-gray-800">
          <button className="flex items-center gap-2 p-2 text-gray-300 hover:text-white w-full rounded-md hover:bg-gray-800 transition-colors">
            <div className="bg-gray-300 p-1 rounded">
              <Plus className="h-4 w-4 text-gray-800" />
            </div>
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-300 hover:text-white w-full rounded-md hover:bg-gray-800 transition-colors">
            <div className="bg-gradient-to-br from-purple-500 to-blue-300 p-1 rounded">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span>Liked Songs</span>
          </button>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-800">
        <div className="space-y-2">
          <Link href="#" className="text-sm text-gray-400 hover:text-white block">Legal</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white block">Privacy Policy</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white block">Cookies</Link>
        </div>
      </div>
    </div>
  );
}
