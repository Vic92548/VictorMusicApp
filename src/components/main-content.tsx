'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Play as PlayIcon } from 'lucide-react';
import { Button, ScrollArea } from '@/components/ui';
import Image from 'next/image';

const playlists = [
  { id: 1, name: 'Today\'s Top Hits', description: 'The hottest tracks right now', image: '/placeholder-album.jpg' },
  { id: 2, name: 'RapCaviar', description: 'New music from Drake, Kendrick Lamar and more', image: '/placeholder-album.jpg' },
  { id: 3, name: 'All Out 2010s', description: 'The biggest songs of the 2010s', image: '/placeholder-album.jpg' },
  { id: 4, name: 'Rock Classics', description: 'Rock legends & epic songs', image: '/placeholder-album.jpg' },
  { id: 5, name: 'Chill Hits', description: 'Kick back to the best new and recent chill hits', image: '/placeholder-album.jpg' },
];

const recentlyPlayed = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', image: '/placeholder-album.jpg' },
  { id: 2, title: 'Save Your Tears', artist: 'The Weeknd', image: '/placeholder-album.jpg' },
  { id: 3, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', image: '/placeholder-album.jpg' },
  { id: 4, title: 'good 4 u', artist: 'Olivia Rodrigo', image: '/placeholder-album.jpg' },
];

export function MainContent() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Header */}
      <header className={`sticky top-0 z-10 p-4 transition-all duration-200 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/30 hover:bg-black/50">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-black/30 hover:bg-black/50">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full bg-transparent hover:bg-white/10 border-white/20">
              Upgrade
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-white font-medium">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <ScrollArea className="flex-1 px-6 py-4" onScroll={handleScroll}>
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Good evening</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Show all
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentlyPlayed.map((item) => (
              <div key={item.id} className="bg-gray-800/50 hover:bg-gray-700/70 rounded-md p-4 flex items-center gap-4 transition-colors cursor-pointer">
                <div className="h-16 w-16 bg-gray-700 rounded overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Made For You</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Show all
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="bg-gray-800/50 hover:bg-gray-700/70 p-4 rounded-md transition-all hover:bg-gray-800/70 cursor-pointer group">
                <div className="relative mb-4">
                  <div className="aspect-square bg-gray-700 rounded-md overflow-hidden">
                    <img src={playlist.image} alt={playlist.name} className="h-full w-full object-cover" />
                  </div>
                  <button className="absolute bottom-2 right-2 h-10 w-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-200 hover:scale-105 hover:bg-green-400">
                    <PlayIcon className="h-5 w-5 text-black ml-0.5" />
                  </button>
                </div>
                <h3 className="font-medium text-white mb-1 truncate">{playlist.name}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{playlist.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollArea>
    </div>
  );
}
