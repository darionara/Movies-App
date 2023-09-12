import React, { useMemo, FC } from 'react'
import clsx from 'clsx'
import { InputProps } from '@types/InputType'
import { getSizeClasses } from '@utils/getSizeClasses'
import { BASE_INPUT_CLASSES } from '@styles/InputStyles'

export const InputText: FC<InputProps> = ({
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
