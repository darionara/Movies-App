import { FC, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { ListMovie } from 'api-client';

import apiClient from '@/api';
import MoviesList from '@/ui/MoviesList/MoviesList';
import Button from '@/ui/Button/Button';
import SortingSelect from '@/ui//SortingSelect/SortingSelect';
import ListBulletIcon from '@/ui/Icons/ListBullet/ListBullet';
import SquaresIcon from '@/ui/Icons/Squares/Squares';
import { setGridLayout, setListLayout } from '@/store/MainSlice';
import { RootState } from '@/store/store';

const MainPanel: FC = () => {
  const dispatch = useDispatch();
  const handleGridLayout = useCallback(() => {
    dispatch(setGridLayout());
  }, [dispatch]);
  const handleListLayout = useCallback(() => {
    dispatch(setListLayout());
  }, [dispatch]);
  const isGrid = useSelector((state: RootState) => state.main.isGrid);
  const selected = useSelector((state: RootState) => state.main.selected);

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies', selected],
    queryFn: ({ pageParam }) =>
      apiClient.topRatedControllerFindAll({ page: pageParam, sort: selected }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.meta.page + 1;
      return nextPage <= lastPage.data.meta.total_pages ? nextPage : undefined;
    },
  });

  const movies = useMemo(() => {
    if (!data) return [];
    let allMovies: ListMovie[] = [];
    data.pages.forEach((page) => {
      allMovies = allMovies.concat(page.data.data);
    });
    return allMovies;
  }, [data]);

  const renderList = () => {
    if (isLoading) return 'Loading...';
    if (error) return `Oops... ${error.message} :(`;
    return <MoviesList className="py-5" movies={movies} />;
  };

  return (
    <main className="w-full">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Rated</h2>
        <div className="flex gap-1.5">
          <span className="text-sm">Sort by:</span>
          <SortingSelect className="mr-2.5 pr-2" />
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
        {renderList()}
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
