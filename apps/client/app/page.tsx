'use client'
import { SidePanel } from '@/ui/FiltersSidebar/FiltersSidebar'
import { MainPanel } from '@/ui/MainPanel/Main'
import { Header } from '@/ui/Header/Header'

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <SidePanel />
        <MainPanel />
      </main>
    </div>
  )
}
