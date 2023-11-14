import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import SearchIcon from '@/ui/Icons/Search/Search';

type InputSearchProps = ComponentPropsWithoutRef<'div'>;

const InputSearch: FC<InputSearchProps> = ({
  placeholder = 'Search',
  className,
  ...props
}) => {
  return (
    <div className={clsx('relative flex items-center', className)} {...props}>
      <div className="absolute pl-4">
        <SearchIcon />
      </div>
      <input
        type="search"
        id="search"
        className="text-white/35 w-64 rounded-full bg-input-color px-4 py-3 pl-12 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputSearch;
