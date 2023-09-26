'use client'
import { CustomSlider } from '@/ui/Slider/Slider'
import { SearchIcon } from '@/ui/Icons/Search/Search'
import { InputText } from '@/ui/InputText/InputText'
import { InputSearch } from '@/ui/InputSearch/InputSearch'

export default function HomePage() {
  return (
    <>
      <CustomSlider range className='m-5' />
      <SearchIcon className='m-5' />
      {/* why I cannot add styles to InputText and Slider this way? */}
      <InputText className='m-5' /> 
      <InputSearch className='m-5' />
    </>
  )
}