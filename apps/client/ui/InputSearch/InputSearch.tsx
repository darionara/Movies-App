import type { FC, ComponentPropsWithoutRef } from "react"
import { SearchIcon } from '../Icons/Search/Search'

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
          className='text-white/35 bg-input-color px-4 py-3 focus:outline-none rounded-full pl-12'
          placeholder={placeholder}
        />
      </div>
    </form>
  )
}
