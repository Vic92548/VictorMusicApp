'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Play, Headphones, Music, Mic2, Disc3 } from 'lucide-react';

const featuredPlaylists = [
  {
    id: 1,
    title: 'Today\'s Top Hits',
    description: 'The hottest tracks right now',
    image: '/placeholder-album.jpg',
  },
  {
    id: 2,
    title: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music',
    image: '/placeholder-album.jpg',
  },
  {
    id: 3,
    title: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits',
    image: '/placeholder-album.jpg',
  },
];

const recentlyPlayed = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', image: '/placeholder-album.jpg' },
  { id: 2, title: 'Save Your Tears', artist: 'The Weeknd', image: '/placeholder-album.jpg' },
  { id: 3, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', image: '/placeholder-album.jpg' },
  { id: 4, title: 'good 4 u', artist: 'Olivia Rodrigo', image: '/placeholder-album.jpg' },
];

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-darker-gray to-nordic-gray">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magic-blue to-purple-500">
              Music for everyone
            </h1>
            <p className="text-xl text-light-gray mb-10 max-w-2xl mx-auto">
              Millions of songs. No credit card needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => router.push('/sign-up')}
                className="bg-magic-blue hover:bg-magic-blue/90 text-white px-8 py-6 text-lg font-bold rounded-full"
              >
                Get Victor Music Free
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push('/sign-in')}
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold rounded-full"
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Play your favorites', 
                description: 'Listen to the songs you love',
                icon: <Headphones className="w-8 h-8 text-magic-blue" />
              },
              { 
                title: 'Playlists made easy', 
                description: 'Create and share playlists',
                icon: <Music className="w-8 h-8 text-magic-blue" />
              },
              { 
                title: 'Made for you', 
                description: 'Get personal recommendations',
                icon: <Mic2 className="w-8 h-8 text-magic-blue" />
              },
              { 
                title: 'Listen everywhere', 
                description: 'Music for your phone and other devices',
                icon: <Disc3 className="w-8 h-8 text-magic-blue" />
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-magic-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-light-gray">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Preview Section */}
          <div className="mt-24 bg-gradient-to-r from-magic-blue/10 to-purple-500/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to start listening?</h2>
              <p className="text-xl text-light-gray mb-8">
                Join Victor Music now and get access to millions of songs, podcasts, and more.
              </p>
              <Button 
                onClick={() => router.push('/sign-up')}
                className="bg-magic-blue hover:bg-magic-blue/90 text-white px-8 py-6 text-lg font-bold rounded-full"
              >
                Sign up free
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
