import type { FC, ComponentPropsWithoutRef } from 'react'
import { SearchIcon } from '@/ui/Icons/Search/Search'

type InputSearchProps = ComponentPropsWithoutRef<'form'>

export const InputSearch: FC<InputSearchProps> = ({
  placeholder = 'Search',
  ...props
}) => {
  return (
    <form {...props}>
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
          className="w-64 px-4 py-3 pl-12 bg-input-color text-white/35 rounded-full focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </form>
  )
}
