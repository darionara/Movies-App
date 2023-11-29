import type { FC } from 'react';
import { useDispatch } from 'react-redux';

import MoviesList from '@/ui/MoviesList/MoviesList';
import Button from '@/ui/Button/Button';
import SortingSelect from '@/ui//SortingSelect/SortingSelect';
import ListBulletIcon from '@/ui/Icons/ListBullet/ListBullet';
import SquaresIcon from '@/ui/Icons/Squares/Squares';
import { setGridLayout, setListLayout } from '@/store/MainSlice';

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

  return (
    <main>
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Rated</h2>
        <div className="flex gap-1.5">
          <span className="text-sm">Sort by:</span>
          <SortingSelect options={options} className="mr-2.5 pr-2" />
          <ListBulletIcon
            onClick={handleListLayout}
            className="cursor-pointer"
          />
          <SquaresIcon onClick={handleGridLayout} className="cursor-pointer" />
        </div>
      </header>
      <section>
        <MoviesList className="py-5" />
        <Button variant="secondary" className="mt-9">
          Load more
        </Button>
      </section>
    </main>
  );
};

export default MainPanel;
