import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';

import { toggleGenre } from '@/store/FiltersSidebarSlice';
import GenrePill from '@/ui/GenrePill/GenrePill';
import { RootState } from '@/store/store';

// TODO: remove the array when data will go from API
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
];

type GenresListProps = ComponentPropsWithoutRef<'ul'>;

const GenresList: FC<GenresListProps> = ({ className, ...props }) => {
  const activeGenres = useSelector(
    (state: RootState) => state.filters.activeGenres,
  );

  const dispatch = useDispatch();
  const handleGenreClick = (genre: string) => {
    dispatch(toggleGenre(genre));
  };

  return (
    <ul
      className={clsx(
        'w-full min-w-[100px]',
        'flex flex-wrap gap-2',
        className,
      )}
      {...props}
    >
      {genres.map((genre) => {
        return (
          <li key={genre}>
            <GenrePill
              isActive={activeGenres.includes(genre)}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </GenrePill>
          </li>
        );
      })}
    </ul>
  );
};

export default GenresList;
