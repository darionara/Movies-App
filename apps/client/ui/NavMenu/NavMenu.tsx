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

type NavMenuProps = ComponentPropsWithoutRef<'ul'> & {
  activeItem?: string
  onHover?: (option: string) => void
  isOpen?: boolean
  onMouseLeave?: () => void
}

export const NavMenu: FC<NavMenuProps> = ({
  className,
  activeItem,
  onHover,
  isOpen,
  onMouseLeave,
  ...props
}) => {
  return (
    <ul className={clsx('flex flex-row gap-8', className)} {...props}>
      {menuItems.map((item) => (
        <li
          key={item}
          className={clsx(
            'relative text-lg font-bold capitalize cursor-default whitespace-nowrap',
            'hover:text-text-color transition-colors transition-ease-in-out duration-100',
            {
              'text-text-color cursor-pointer': activeItem === item,
              'text-text-color/[.50]': activeItem !== item,
            },
          )}
          onMouseOver={() => onHover(item)}
          onMouseLeave={onMouseLeave}
        >
          {item}
          {activeItem === item && (
            <DropdownMenu
              isOpen={isOpen}
              className="absolute top-10 text-sm font-semibold"
              menuItems={dropdownMenuItems}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
