import type { FC } from 'react'
import { GenrePill } from '@/ui/Pill/Pill'
import clsx from 'clsx'

const genres: string[] = ['action', 'adventure', 'animation', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 'horror', 'music', 'mystery', 'romance', 'science fiction', 'TV movie', 'thriller', 'war', 'western']

type GenresListProps = {
  className?: string
}

export const GenresList: FC<GenresListProps> = (className) => {

  const listClasses = clsx('min-w-[100px] w-full', className)

  return (
    <div className={listClasses}>
      <ul className='flex flex-wrap gap-2'>
        {genres.map((genre) => {
          return (
            <li key={genre}>
              <GenrePill>{genre}</GenrePill>
            </li>
          )
        })}
      </ul>
    </div>
  )
}