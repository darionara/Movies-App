'use client'
import { GenrePill } from '@/ui/Pill/Pill'
import { Button } from '@/ui/Button/Button'
import { GenresList } from '@/ui/PillsList/PillsList'
import { FilterHeading } from '@/ui/Headings/FilterHeading'
import { InputSearch } from '@/ui/InputSearch/InputSearch'
import { InputText } from '@/ui/InputText/InputText'
import { TabMenu } from '@/ui/Headings/TabMenu'

export default function HomePage() {
  return (
    <>
      <InputSearch className='m-5' />
      <InputText className='m-5' />
      <GenrePill className='m-5'>Genre</GenrePill>
      <Button size='small' className='m-5'>This is a really long button text</Button>
      <GenresList className='m-5' />
      <FilterHeading className='m-5'>filter</FilterHeading>
      <TabMenu className='m-5'>movies</TabMenu>
    </>
  )
}