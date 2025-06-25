import { ReactNode } from 'react';
import { MainNav } from '@/components/main-nav';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-nordic-gray">
      <MainNav />
      <main className="flex-1">{children}</main>
    </div>
  );
}
