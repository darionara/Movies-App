import type { FC } from 'react'
import { GenrePill } from '@/ui/Pill/Pill'
import clsx from 'clsx'

const genres: string[] = [
  'action',
  'adventure',
  'animation',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'family',
  'fantasy',
  'history',
  'horror',
  'music',
  'mystery',
  'romance',
  'science fiction',
  'TV movie',
  'thriller',
  'war',
  'western',
]

type GenresListProps = {
  className?: string
  activeGenres?: string[]
  onGenreClick?: (genre: string) => void
}

export const GenresList: FC<GenresListProps> = ({
  className,
  activeGenres,
  onGenreClick,
}) => {
  return (
    <div className={clsx('min-w-[100px] w-full', className)}>
      <ul className="flex flex-wrap gap-2">
        {genres.map((genre) => {
          return (
            <li key={genre}>
              <GenrePill
                isActive={activeGenres.includes(genre)}
                onClick={() => onGenreClick(genre)}
              >
                {genre}
              </GenrePill>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
