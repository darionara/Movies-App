import type { FC, ComponentPropsWithoutRef } from 'react'

type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  Icon: JSX.Element
  text: string
}

export const MenuItem: FC<MenuItemProps> = ({ Icon, text }) => (
  <li className="p-3 hover:bg-gray-300 transition-colors transition-ease-in-out duration-200">
    {/* <Icon className="h-6 w-6 inline mx-3 text-black-grey" /> */}
    <span className="text-black-grey cursor-default">{text}</span>
  </li>
)
