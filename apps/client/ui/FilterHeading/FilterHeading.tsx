import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type FilterHeadingProps = ComponentPropsWithoutRef<'h3'>;

const FilterHeading: FC<FilterHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={clsx(
        'cursor-default text-xs font-bold uppercase text-white/[.35]',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export default FilterHeading;
