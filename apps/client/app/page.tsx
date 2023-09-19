'use client'
import { useState, useEffect } from 'react'
import { CustomSlider } from '@/ui/Slider/Slider'

// useState and useEffect to bypass the hydration errors - now the errors are gone but the tooltips are still not visible :(
export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      <CustomSlider />
    </>
  )
}