import type { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';

type PillProps = ComponentPropsWithoutRef<'button'> & {
  isActive: boolean;
};

const GenrePill: FC<PillProps> = ({ className, isActive, ...props }) => {
  const pillClasses = clsx(
    'py-1 px-3.5 items-center',
    'text-xs text-text-color font-semibold leading-5 capitalize',
    'whitespace-nowrap rounded-full border',
    'transition-colors duration-100 transition-ease-in-out',
    isActive
      ? 'bg-primary border-primary hover:bg-primary hover:border-primary'
      : 'bg-black-grey border-white/50 hover:bg-white/[.15]',
    className,
  );

  return <button className={pillClasses} type="button" {...props} />;
};

export default GenrePill;
