import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type FilterHeadingProps = ComponentPropsWithoutRef<'h3'>

export const FilterHeading: FC<FilterHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={clsx(
        'text-white/[.35] text-xs font-bold uppercase cursor-default',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  )
}
