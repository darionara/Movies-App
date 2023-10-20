import {
  FireIcon,
  PlayIcon,
  CalendarDaysIcon,
  StarIcon,
} from '@heroicons/react/20/solid'
import type { FC } from 'react'
import clsx from 'clsx'
import { MenuItem } from '@/ui/DropdownMenu/DropdownMenuItem'

type DropdownProps = {
  className?: string
  isOpen?: boolean
  onMouseLeave?: () => void;
}

const menuItems = [
  {
    icon: <FireIcon className="h-6 w-6 inline mx-3 text-black-grey" />,
    text: 'Popular',
  },
  {
    icon: <PlayIcon className="h-6 w-6 inline mx-3 text-black-grey" />,
    text: 'Now Playing',
  },
  {
    icon: <CalendarDaysIcon className="h-6 w-6 inline mx-3 text-black-grey" />,
    text: 'Upcoming',
  },
  {
    icon: <StarIcon className="h-6 w-6 inline mx-3 text-black-grey" />,
    text: 'Top Rated',
  },
]

export const DropdownMenu: FC<DropdownProps> = ({ className, isOpen, onMouseLeave }) => {
  return (
    <ul
      className={clsx(
        'z-10 w-[180px] py-4 rounded-lg bg-white',
        { block: isOpen, hidden: !isOpen },
        className,
      )}
      onMouseLeave={onMouseLeave}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.text} {...item} />
      ))}
    </ul>
  )
}
