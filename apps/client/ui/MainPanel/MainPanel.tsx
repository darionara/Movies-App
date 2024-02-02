import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useInfiniteQuery } from '@tanstack/react-query';

import apiClient from '@/api';
import MoviesList from '@/ui/MoviesList/MoviesList';
import Button from '@/ui/Button/Button';
import SortingSelect from '@/ui//SortingSelect/SortingSelect';
import ListBulletIcon from '@/ui/Icons/ListBullet/ListBullet';
import SquaresIcon from '@/ui/Icons/Squares/Squares';
import { setGridLayout, setListLayout } from '@/store/MainSlice';
import { RootState } from '@/store/store';

const options = [
  'Popularity Descending',
  'Popularity Ascending',
  'Rating Descending',
  'Rating Ascending',
  'Release Date Descending',
  'Release Date Ascending',
  'Title (A-Z)',
  'Title (Z-A)',
];

const MainPanel: FC = () => {
  const dispatch = useDispatch();
  const handleGridLayout = () => {
    dispatch(setGridLayout());
  };
  const handleListLayout = () => {
    dispatch(setListLayout());
  };
  const isGrid = useSelector((state: RootState) => state.main.isGrid);

  const {
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam }) =>
      apiClient.topRatedControllerFindAll({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.meta.page + 1;
      return nextPage <= lastPage.data.meta.total_pages ? nextPage : undefined;
    },
  });

  return (
    <main className="w-full">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Rated</h2>
        <div className="flex gap-1.5">
          <span className="text-sm">Sort by:</span>
          <SortingSelect options={options} className="mr-2.5 pr-2" />
          <ListBulletIcon
            onClick={handleListLayout}
            className={clsx(
              'cursor-pointer',
              !isGrid ? 'fill-primary' : 'fill-white',
            )}
          />
          <SquaresIcon
            onClick={handleGridLayout}
            className={clsx(
              'cursor-pointer',
              isGrid ? 'fill-primary' : 'fill-white',
            )}
          />
        </div>
      </header>
      <section>
        {isFetching && 'Loading...'}
        {error && `Oops... ${error.message} :(`}
        {!isFetching && !error && (
          <MoviesList
            className="py-5"
            movies={data.pages.flatMap((page) => page.data.data)}
          />
        )}
        {hasNextPage && (
          <Button
            variant="secondary"
            className="mt-9"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}
          </Button>
        )}
      </section>
    </main>
  );
};

export default MainPanel;
