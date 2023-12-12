import type { ComponentPropsWithoutRef, FC } from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useSelector } from 'react-redux';

import MovieTile from '@/ui/MovieTile/MovieTile';
import { RootState } from '@/store/store';

type MoviesListProps = ComponentPropsWithoutRef<'ul'>;

const MoviesList: FC<MoviesListProps> = ({ className, ...props }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const isGrid = useSelector((state: RootState) => state.main.isGrid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/top-rated');
        setMovies(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  loading && <p>Loading...</p>;

  return (
    <ul
      className={clsx(
        'flex flex-wrap justify-between',
        { 'gap-8': isGrid },
        className,
      )}
      {...props}
    >
      {movies.map((movie, index) => {
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
              // it's not the ideal solution - when there are 3 tiles in a row the last row has 2 tiles which occupy the whole width
              {
                'w-full flex-auto md:w-1/3 lg:w-1/4 xl:w-1/5': isGrid,
              },
            )}
          >
            <MovieTile
              title={movie.title}
              year={movie.release_date.split('-')[0]} // ?
              rating={Math.floor(movie.rate)}
              place={index + 1} // i know it's dumb but how to get the same result in another way? :D
              imageSrc={movie.backdrop_image}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
