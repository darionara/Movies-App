import type { FC } from 'react'
import clsx from 'clsx'

const menuItems = ['TV Shows', 'Movies', 'Series', 'Animations']

type NavMenuProps = {
  className?: string
  activeItem?: string
  onClick?: (option: string) => void
}

export const NavMenu: FC<NavMenuProps> = ({ className, activeItem, onClick }) => {
  return (
    <ul className={clsx('flex flex-row gap-8', className)}>
      {menuItems.map((item) => (
        <li
          key={item}
          className={clsx('text-lg font-bold capitalize cursor-pointer', {
            'text-text-color': activeItem === item,
            'text-text-color/[.50]': activeItem !== item,
          })}
          onClick={() => onClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}