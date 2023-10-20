import type { FC } from 'react'
import clsx from 'clsx'
import { DropdownMenu } from '@/ui/DropdownMenu/DropdownMenu'

const menuItems = ['TV Shows', 'Movies', 'Series', 'Animations']

type NavMenuProps = {
  className?: string
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
  onMouseLeave
}) => {
  return (
    <ul className={clsx('flex flex-row gap-8', className)}>
      {menuItems.map((item) => (
        <div>
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
          >
            {item}
          </li>
          {activeItem === item && <DropdownMenu isOpen={isOpen} onMouseLeave={onMouseLeave} className='absolute top-[105px]' />}
        </div>
      ))}

    </ul>
  )
}
