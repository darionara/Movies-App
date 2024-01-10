import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import SearchIcon from '@/ui/Icons/Search/Search';

type InputSearchProps = ComponentPropsWithoutRef<'input'>;

const InputSearch: FC<InputSearchProps> = ({
  placeholder = 'Search',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('relative flex items-center min-w-[135px]', className)}
      {...props}
    >
      <div className="absolute pl-4">
        <SearchIcon />
      </div>
      <input
        type="search"
        id="search"
        className="text-white/30 w-full rounded-full bg-input-color px-4 py-3 pl-12 focus:outline-none placeholder:text-text-color/30"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputSearch;
