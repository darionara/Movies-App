import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type FilterHeadingProps = ComponentPropsWithoutRef<'h3'> & {
  children: string
  className?: string
}

export const FilterHeading: FC<FilterHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={clsx(
        'text-white/[.35] text-xs font-bold uppercase cursor-default',
        className,
      )}
    >
      {children}
    </h3>
  )
}
