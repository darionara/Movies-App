import { Button } from '@/ui/Button/Button'
import { CustomSlider } from '@/ui/Slider/Slider'
import { InputText } from '@/ui/InputText/InputText'
import { FilterHeading } from '@/ui/Headings/FilterHeading'
import { GenresList } from '@/ui/PillsList/PillsList'
import { useState } from 'react'
import type { FC } from 'react'

type SidebarProps = {
  className?: string
}

export const SidePanel: FC<SidebarProps> = () => {
  /*   I have a problem with sliderValue type - 
  when <number> -> the Slider is ok but Slider with prop range gives an error:
  Type '{ range: true; value: number; onChange: (value: number) => void; }' is not assignable to type 'IntrinsicAttributes & CustomSliderProps'.
  Types of property 'value' are incompatible.
  Type 'number' is not assignable to type 'number[]'. 
  I think it worked when you showed me this on Wednesday - where's the difference?
*/
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
