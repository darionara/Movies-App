'use client'
import { useState } from 'react'
import { CustomSlider } from '@/ui/Slider/Slider'
import { SearchIcon } from '@/ui/Icons/Search/Search'
import { InputText } from '@/ui/InputText/InputText'
import { InputSearch } from '@/ui/InputSearch/InputSearch'

export default function HomePage() {
  const [sliderValue, setSliderValue] = useState<number | number[]>()

  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value)
  }

  return (
    <>
      <CustomSlider className="pl-5" value={sliderValue} onChange={handleSliderChange} />
      <SearchIcon className="m-5" />
      <InputText className="m-5" />
      <InputSearch className="m-5" />
    </>
  )
}
