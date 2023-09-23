import { useState } from 'react';
import type { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';

type PillProps = ComponentPropsWithoutRef<'button'>

export const GenrePill: FC<PillProps> = ({ className, ...props}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const pillClasses = clsx(
    'whitespace-nowrap py-1 px-3.5 rounded-full border text-text-color text-xs font-semibold leading-5 capitalize items-center transition-colors duration-100 transition-ease-in-out',
    {
      'bg-primary border-primary hover:bg-primary hover:border-primary': isActive,
      'bg-black-grey border-white/50 hover:bg-white/[.15]': !isActive,
    }, 
    className
  );

  return (
    <button
      className={pillClasses}
      onClick={handleClick}
      {...props}
    />
  );
};





