import React, { useMemo, ComponentPropsWithoutRef, FC } from 'react'
import clsx from 'clsx'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const getSizeClasses = (size: ButtonProps['size']): string => {
  switch (size) {
    case 'small': {
      return 'px-3 py-2.5 text-sm'
    }
    case 'large': {
      return 'px-6 py-5'
    }
    default: {
      return 'px-4 py-3.5'
    }
  }
}

const getModeClasses = (variant: ButtonProps['variant']): string =>
  variant === 'primary'
    ? 'text-text-color bg-primary hover:bg-dark-red'
    : 'text-white/50 bg-secondary hover:text-text-color w-full'

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-md leading-normal inline-block min-w-[208px] transition-colors duration-100 transition-ease-in-out'

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}) => {
  const computedClasses: string = useMemo(() => {
    const modeClass: string = getModeClasses(variant)
    const sizeClass: string = getSizeClasses(size)

    return clsx(BASE_BUTTON_CLASSES, modeClass, sizeClass, className)
  }, [variant, size, className])

  return (
    <button className={computedClasses} {...props} />
  )
}
