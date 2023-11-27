import type { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';

import MovieTile from '@/ui/MovieTile/MovieTile';

// TODO: remove the object when data will go from API
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
];

type MoviesListProps = ComponentPropsWithoutRef<'ul'>;

const MoviesList: FC<MoviesListProps> = ({ className, ...props }) => {
  return (
    <ul
      className={clsx('flex flex-wrap justify-between gap-8', className)}
      {...props}
    >
      {mockedMoviesData.map((movieData) => {
        return (
          <li key={movieData.title}>
            <MovieTile
              title={movieData.title}
              year={movieData.year}
              rating={movieData.rating}
              place={movieData.place}
              imageSrc={movieData.imageSrc}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
