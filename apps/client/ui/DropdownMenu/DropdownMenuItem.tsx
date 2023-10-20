import type { FC } from 'react'

type MenuItemProps = {
  icon: JSX.Element
  text: string
}

export const MenuItem: FC<MenuItemProps> = ({ icon, text }) => (
  <li className="p-3 hover:bg-gray-300 transition-colors transition-ease-in-out duration-200">
    {icon}
    <span className="text-black-grey cursor-default">{text}</span>
  </li>
)
