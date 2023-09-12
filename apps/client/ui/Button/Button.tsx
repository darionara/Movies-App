import React, { useMemo, ComponentPropsWithoutRef, FC } from 'react'
import clsx from 'clsx'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  children: string
  onClick?: () => void
}

const getSizeClasses = (size: ButtonProps['size']): string => {
  switch (size) {
    case 'small': {
      return 'px-16 py-3'
    }
    case 'large': {
      return 'px-32 py-4'
    }
    default: {
      return 'px-24 py-3.5'
    }
  }
}

const getModeClasses = (variant: ButtonProps['variant']): string =>
  variant === 'primary'
    ? 'text-text-color bg-primary hover:bg-dark-red'
    : 'text-white/50 bg-secondary hover:text-text-color w-full'

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-md leading-normal inline-block transition-colors duration-100 transition-ease-in-out'

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  const computedClasses: string = useMemo(() => {
    const modeClass: string = getModeClasses(variant)
    const sizeClass: string = getSizeClasses(size)

    return clsx(BASE_BUTTON_CLASSES, modeClass, sizeClass)
  }, [variant, size])

  return (
    <button className={computedClasses} {...props}>
      {children}
    </button>
  )
}
