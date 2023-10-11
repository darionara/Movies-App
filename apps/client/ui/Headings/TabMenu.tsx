import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

type TabMenuProps = {
  children: ReactNode
  className?: string
  isActive?: boolean
  onClick?: () => void
}

export const TabMenu: FC<TabMenuProps> = ({ children, className, isActive, onClick }) => {
  const TabMenuClasses = clsx('text-lg font-bold capitalize cursor-default',
    {
      'text-text-color': isActive,
      'text-text-color/[.50]': !isActive
    }, 
    className
    );

  return (
    <h2 className={TabMenuClasses} onClick={onClick}>{children}</h2>
  )
}