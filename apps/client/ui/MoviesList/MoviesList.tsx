import type { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import type { ListMovie } from 'api-client';

import MovieTile from '@/ui/MovieTile/MovieTile';
import { RootState } from '@/store/store';

type MoviesListProps = ComponentPropsWithoutRef<'ul'> & {
  movies: ListMovie[];
};

const MoviesList: FC<MoviesListProps> = ({ className, movies, ...props }) => {
  const isGrid = useSelector((state: RootState) => state.main.isGrid);

  return (
    <ul
      className={clsx(
        'flex flex-wrap justify-between',
        {
          'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4':
            isGrid,
        },
        className,
      )}
      {...props}
    >
      {movies.map((movie, index) => (
        <li
          key={movie.id}
          className={clsx(
            'cursor-pointer',
            {
              'transition-ease-in-out transition-[background-color] duration-200 even:border-y even:border-white/10 even:bg-black-grey/60 hover:bg-black/20':
                !isGrid,
            },
            {
              'w-full px-10 py-4': !isGrid,
            },
          )}
        >
          <MovieTile
            title={movie.title}
            year={movie.release_date.split('-')[0]}
            rating={Math.floor(movie.rate)}
            place={index + 1}
            imageSrc={movie.poster_image}
          />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
