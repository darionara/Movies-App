import {
  FireIcon,
  PlayIcon,
  CalendarDaysIcon,
  StarIcon,
} from '@heroicons/react/20/solid'
import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { DropdownMenu } from '@/ui/DropdownMenu/DropdownMenu'

const menuItems = ['TV Shows', 'Movies', 'Series', 'Animations']

const dropdownMenuItems = [
  {
    Icon: FireIcon,
    text: 'Popular',
  },
  {
    Icon: PlayIcon,
    text: 'Now Playing',
  },
  {
    Icon: CalendarDaysIcon,
    text: 'Upcoming',
  },
  {
    Icon: StarIcon,
    text: 'Top Rated',
  },
]

type NavMenuProps = Omit<ComponentPropsWithoutRef<'ul'>, 'onMouseOver'> & {
  activeItem?: string
  onMouseOver?: (item: string) => void
  onMouseLeave?: () => void
  onOptionSelect?: () => void
}

export const NavMenu: FC<NavMenuProps> = ({
  className,
  activeItem,
  onMouseOver,
  onMouseLeave,
  onOptionSelect,
  ...props
}) => {
  return (
    <ul className={clsx('flex flex-row gap-8', className)} {...props}>
      {menuItems.map((item) => (
        <li
          key={item}
          className={clsx(
            'h-12 leading-[48px] relative text-lg font-bold capitalize cursor-default whitespace-nowrap',
            {
              'hover:text-text-color transition-colors transition-ease-in-out duration-100': !activeItem,
              'text-text-color cursor-pointer': activeItem === item,
              'text-text-color/[.50]': activeItem !== item,
            },
          )}
          onMouseOver={() => onMouseOver(item)}
          onMouseLeave={onMouseLeave}
        >
          {item}
          {activeItem === item && (
            <DropdownMenu
              className="absolute text-sm font-semibold"
              menuItems={dropdownMenuItems}
              onMouseOver={() => onMouseOver(item)}
              onMouseLeave={onMouseLeave}
              onOptionSelect={onOptionSelect}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
