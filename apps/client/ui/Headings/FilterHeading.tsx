import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

type FilterHeadingProps = {
  children: ReactNode
  className?: string
}

export const FilterHeading: FC<FilterHeadingProps> = ({ children, className }) => {
  const headingClasses = clsx('text-white/[.35] text-xs font-bold uppercase cursor-default', className)

  return (
    <h3 className={headingClasses}>{children}</h3>
  )
}