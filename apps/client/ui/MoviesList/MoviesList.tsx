import type { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

import MovieTile from '@/ui/MovieTile/MovieTile';
import { RootState } from '@/store/store';

type MoviesListProps = ComponentPropsWithoutRef<'ul'>;

const MoviesList: FC<MoviesListProps> = ({ className, ...props }) => {
  const isGrid = useSelector((state: RootState) => state.main.isGrid);

  const {
    isPending,
    error,
    data: movies,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: async () =>
      await axios
        .get('http://localhost:3001/top-rated')
        .then((response) => response.data.data),
  });

  if (isPending) return 'Loading...';
  if (error) return `Oops... ${error.message} :(`;

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
      {movies?.map((movie, index) => {
        return (
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
              imageSrc={movie.backdrop_image}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
