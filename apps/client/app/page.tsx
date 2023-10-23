'use client'
import { FiltersSidebar } from '@/ui/FiltersSidebar/FiltersSidebar'
import { MainPanel } from '@/ui/MainPanel/MainPanel'
import { Header } from '@/ui/Header/Header'

export default function HomePage() {
  return (
    <div>
      <Header />
      <FiltersSidebar />
      <main>
        <MainPanel />
      </main>
    </div>
  )
}
