'use client';

import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome back, {user?.firstName}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-darker-gray p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Library</h2>
          <p className="text-light-gray">Your favorite tracks and playlists</p>
          <Button className="mt-4">View Library</Button>
        </div>
        <div className="bg-darker-gray p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Plays</h2>
          <p className="text-light-gray">Your recently played tracks</p>
          <Button className="mt-4">View History</Button>
        </div>
        <div className="bg-darker-gray p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recommended</h2>
          <p className="text-light-gray">Discover new music</p>
          <Button className="mt-4">Explore</Button>
        </div>
      </div>
    </div>
  );
}
