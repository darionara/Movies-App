'use client';

import FiltersSidebar from '@/ui/FiltersSidebar/FiltersSidebar';
import MainPanel from '@/ui/MainPanel/MainPanel';
import Header from '@/ui/Header/Header';

export default function HomePage() {
  return (
    <div className="m-auto max-w-screen-xl px-10 pb-16 lg:px-20 xl:p-0">
      <Header />
      <div className="flex gap-12">
        <FiltersSidebar />
        <MainPanel />
      </div>
    </div>
  );
}
