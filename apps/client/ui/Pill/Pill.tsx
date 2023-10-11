import type { ComponentPropsWithoutRef, FC } from 'react'
import clsx from 'clsx'

type PillProps = ComponentPropsWithoutRef<'button'> & {
  isActive?: boolean
  onClick?: () => void
}

export const GenrePill: FC<PillProps> = ({
  className,
  isActive = false,
  onClick,
  ...props
}) => {
  const pillClasses = clsx(
    'py-1 px-3.5 items-center',
    'text-xs text-text-color font-semibold leading-5 capitalize',
    'whitespace-nowrap rounded-full border',
    'transition-colors duration-100 transition-ease-in-out',
    {
      'bg-primary border-primary hover:bg-primary hover:border-primary':
        isActive,
      'bg-black-grey border-white/50 hover:bg-white/[.15]': !isActive,
    },
    className,
  )

  return <button className={pillClasses} onClick={onClick} {...props} />
}
