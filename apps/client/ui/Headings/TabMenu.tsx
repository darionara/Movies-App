import { useState } from 'react'
import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

type TabMenuProps = {
  children: ReactNode
  className?: string
}

export const TabMenu: FC<TabMenuProps> = ({ children, className }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const TabMenuClasses = clsx('text-lg font-bold capitalize cursor-default',
    {
      'text-text-color': isActive,
      'text-text-color/[.50]': !isActive
    }, 
    className
    );

  return (
    <h2 className={TabMenuClasses} onClick={handleClick}>{children}</h2>
  )
}