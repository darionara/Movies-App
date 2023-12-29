'use client';

import FiltersSidebar from '@/ui/FiltersSidebar/FiltersSidebar';
import MainPanel from '@/ui/MainPanel/MainPanel';
import Header from '@/ui/Header/Header';

export default function HomePage() {
  return (
    <div className="m-auto max-w-screen-xl px-3 pb-16 md:px-6">
      <Header />
      <div className="flex gap-12">
        <FiltersSidebar />
        <MainPanel />
      </div>
    </div>
  );
}
