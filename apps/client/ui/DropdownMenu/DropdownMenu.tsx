import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { MenuItem } from '@/ui/DropdownMenu/DropdownMenuItem'

type DropdownProps = ComponentPropsWithoutRef<'ul'> & {
  className?: string
  isOpen?: boolean
  onMouseLeave?: () => void
  menuItems: Array<{ Icon: JSX.Element; text: string }>
}

export const DropdownMenu: FC<DropdownProps> = ({ className, isOpen, onMouseLeave, menuItems }) => {
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
