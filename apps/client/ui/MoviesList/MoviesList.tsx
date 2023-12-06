import type { ComponentPropsWithoutRef, FC } from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useSelector } from 'react-redux';

import MovieTile from '@/ui/MovieTile/MovieTile';
import { RootState } from '@/store/store';

/* // TODO: remove the object when data will go from API
const mockedMoviesData = [
  {
    title: 'The Godfather',
    year: 1974,
    rating: 87,
    place: 1,
    imageSrc: '/movie1.png',
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 87,
    place: 2,
    imageSrc: '/movie2.png',
  },
  {
    title: 'The Godfather Part II',
    year: 1974,
    rating: 86,
    place: 3,
    imageSrc: '/movie3.png',
  },
  {
    title: 'The Godfather',
    year: 1974,
    rating: 87,
    place: 1,
    imageSrc: '/movie1.png',
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 87,
    place: 2,
    imageSrc: '/movie2.png',
  },
  {
    title: 'The Godfather Part II',
    year: 1974,
    rating: 86,
    place: 3,
    imageSrc: '/movie3.png',
  },
  {
    title: 'The Godfather',
    year: 1974,
    rating: 87,
    place: 1,
    imageSrc: '/movie1.png',
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 87,
    place: 2,
    imageSrc: '/movie2.png',
  },
  {
    title: 'The Godfather Part II',
    year: 1974,
    rating: 86,
    place: 3,
    imageSrc: '/movie3.png',
  },
  {
    title: 'The Godfather',
    year: 1974,
    rating: 87,
    place: 1,
    imageSrc: '/movie1.png',
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 87,
    place: 2,
    imageSrc: '/movie2.png',
  },
  {
    title: 'The Godfather Part II',
    year: 1974,
    rating: 86,
    place: 3,
    imageSrc: '/movie3.png',
  },
]; */

type MoviesListProps = ComponentPropsWithoutRef<'ul'>;

const MoviesList: FC<MoviesListProps> = ({ className, ...props }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isGrid = useSelector((state: RootState) => state.main.isGrid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/top-rated',
        {
          headers: {
            'accept': 'application/json',
          }
        });
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  isLoading && <p>Loading...</p>;

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
            className={clsx('cursor-pointer', {
              'transition-ease-in-out w-full px-10 py-4 transition-colors duration-200 even:border-y even:border-white/10 even:bg-black-grey/60 hover:bg-black/20':
                !isGrid,
            })}
          >
            <MovieTile
              title={movie.title}
              year={(movie.release_date).split('-')[0]} // ?
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
