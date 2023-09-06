import React, { useMemo } from 'react'
import clsx from 'clsx'
import {
  BASE_INPUT_CLASSES,
  InputProps,
  getSizeClasses,
} from '../InputText/InputText'
import { SearchIcon } from '../Icons/Search/Search'

export const InputSearch = ({
  size = 'medium',
  placeholder = 'Search',
  ...props
}: InputProps) => {
  const computedClasses: string = useMemo(() => {
    const sizeClass: string = getSizeClasses(size)

    return clsx(BASE_INPUT_CLASSES, sizeClass, 'rounded-full pl-12')
  }, [size])

  return (
    <form>
      <label htmlFor="search" className="mb-2 text-sm text-gray-900 sr-only">
        Search
      </label>
      <div className="relative flex items-center">
        <div className="absolute pl-4">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="search"
          className={computedClasses}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </form>
  )
}
