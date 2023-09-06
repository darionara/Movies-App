import React, { useMemo } from 'react'
import clsx from 'clsx'

export interface InputProps {
  size?: 'small' | 'medium' | 'large'
  placeholder?: string
  onClick?: () => void
}

export const getSizeClasses = (size: 'small' | 'medium' | 'large'): string => {
  switch (size) {
    case 'small': {
      return 'w-48'
    }
    case 'large': {
      return 'w-80'
    }
    default: {
      return 'w-64'
    }
  }
}

export const BASE_INPUT_CLASSES =
  'text-white/35 bg-input-color cursor-pointer px-4 py-3 focus:outline-none'

export const InputText = ({
  size = 'medium',
  placeholder = 'Filter by keywords...',
  ...props
}: InputProps) => {
  const computedClasses: string = useMemo(() => {
    const sizeClass: string = getSizeClasses(size)

    return clsx(BASE_INPUT_CLASSES, sizeClass, 'rounded-md ')
  }, [size])

  return (
    <input
      type="text"
      className={computedClasses}
      placeholder={placeholder}
      {...props}
    />
  )
}
