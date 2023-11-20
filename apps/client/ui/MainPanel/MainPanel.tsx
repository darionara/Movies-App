import type { FC } from 'react';

import MoviesList from '@/ui/MoviesList/MoviesList';
import Button from '@/ui/Button/Button';

const MainPanel: FC = () => {
  return (
    <main>
      <h2 className="text-2xl font-bold">Top Rated</h2>
      <MoviesList className="py-5" />
      <Button variant="secondary" className="mt-9">
        Load more
      </Button>
    </main>
  );
};

export default MainPanel;
