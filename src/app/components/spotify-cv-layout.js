'use client';

import { Sidebar } from './sidebar';

export function SpotifyCVLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
