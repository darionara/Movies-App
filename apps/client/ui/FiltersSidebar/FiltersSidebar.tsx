import { Button } from '@/ui/Button/Button'
import { CustomSlider } from '@/ui/Slider/Slider'
import { InputText } from '@/ui/InputText/InputText'
import { FilterHeading } from '@/ui/FilterHeading/FilterHeading'
import { GenresList } from '@/ui/PillsList/PillsList'
import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { setSliderValue, toggleGenre } from '@/store/FiltersSidebarSlice'
import { RootState } from '@/store/Store'

type SidebarProps = ComponentPropsWithoutRef<'aside'> & {
  className?: string
}

export const FiltersSidebar: FC<SidebarProps> = (className) => {
  const dispatch = useDispatch()
  const sliderValue = useSelector(
    (state: RootState) => state.filters.sliderValue,
  )
  const activeGenres = useSelector(
    (state: RootState) => state.filters.activeGenres,
  )

  const handleSliderChange = (value: typeof sliderValue) => {
    dispatch(setSliderValue(value))
  }

  const handleGenreClick = (genre: string) => {
    dispatch(toggleGenre(genre))
  }

  return (
    <aside
      className={clsx('flex flex-col gap-7 w-60 ml-20 mr-11 mb-12', className)}
    >
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
