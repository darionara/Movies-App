import type { FC } from 'react';

import Button from '@/ui/Button/Button';
import CustomSlider from '@/ui/Slider/Slider';
import InputText from '@/ui/InputText/InputText';
import FilterHeading from '@/ui/FilterHeading/FilterHeading';
import GenresList from '@/ui/GenresList/GenresList';

const FiltersSidebar: FC = () => {
  return (
    <aside className="mb-12 ml-20 mr-11 flex w-60 flex-col gap-7">
      <h2 className="cursor-default text-lg font-bold text-text-color">
        Filters
      </h2>
      <FilterHeading>genres</FilterHeading>
      <GenresList />
      <FilterHeading>user rating</FilterHeading>
      <CustomSlider range />
      <FilterHeading>minimum user votes</FilterHeading>
      <CustomSlider />
      <FilterHeading>keywords</FilterHeading>
      <InputText />
      <Button>Submit</Button>
    </aside>
  );
};

export default FiltersSidebar;
