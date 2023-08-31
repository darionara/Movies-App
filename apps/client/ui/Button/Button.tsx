import React, { useMemo } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const getSizeClasses = (size: 'small' | 'medium' | 'large'): string => {
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

const getModeClasses = (isPrimary: boolean): string =>
  isPrimary
    ? 'text-text-color bg-primary-color hover:bg-dark-red'
    : 'text-white/50 bg-secondary-color hover:text-text-color'

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-md leading-normal inline-block transition-colors duration-200 transition-ease-in-out'

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const computedClasses: string = useMemo(() => {
    const modeClass: string = getModeClasses(primary)
    const sizeClass: string = getSizeClasses(size)

    return clsx(BASE_BUTTON_CLASSES, modeClass, sizeClass)
  }, [primary, size])

  return (
    <button type="button" className={computedClasses} {...props}>
      {label}
    </button>
  )
}
