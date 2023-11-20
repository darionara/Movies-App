'use client';

import FiltersSidebar from '@/ui/FiltersSidebar/FiltersSidebar';
import MainPanel from '@/ui/MainPanel/MainPanel';
import Header from '@/ui/Header/Header';

export default function HomePage() {
  return (
    <div className="pb-16">
      <Header />
      <div className="mx-20 flex gap-12">
        <FiltersSidebar />
        <MainPanel />
      </div>
    </div>
  );
}
