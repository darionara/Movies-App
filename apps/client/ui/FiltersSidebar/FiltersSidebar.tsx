import { Button } from '@/ui/Button/Button'
import { CustomSlider } from '@/ui/Slider/Slider'
import { InputText } from '@/ui/InputText/InputText'
import { FilterHeading } from '@/ui/FilterHeading/FilterHeading'
import { GenresList } from '@/ui/PillsList/PillsList'
import { useState } from 'react'
import type { FC } from 'react'

export const FiltersSidebar: FC = () => {
  // I forgot to ask about this sliderValue type - now it's undefined ;/
  const [sliderValue, setSliderValue] = useState()
  const [activeGenres, setActiveGenres] = useState<string[]>([])

  const handleSliderChange = (value: typeof sliderValue) => {
    setSliderValue(value)
  }

  const handleGenreClick = (genre: string) => {
    setActiveGenres((prevActiveGenres) => {
      return prevActiveGenres.includes(genre)
        ? prevActiveGenres.filter((activeGenre) => activeGenre !== genre)
        : [...prevActiveGenres, genre]
    })
  }

  return (
    <aside className="flex flex-col gap-7 w-60 ml-20 mr-11 mb-12">
      <h2 className="text-lg font-bold text-text-color cursor-default">
        Filters
      </h2>
      <FilterHeading>genres</FilterHeading>
      <GenresList activeGenres={activeGenres} onGenreClick={handleGenreClick} />
      <FilterHeading>user rating</FilterHeading>
      <CustomSlider range value={sliderValue} onChange={handleSliderChange} />
      <FilterHeading>minimum user votes</FilterHeading>
      <CustomSlider value={sliderValue} onChange={handleSliderChange} />
      <FilterHeading>keywords</FilterHeading>
      <InputText />
      <Button>Submit</Button>
    </aside>
  )
}
