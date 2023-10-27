import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { MenuItem } from '@/ui/DropdownMenu/DropdownMenuItem'

type DropdownProps = ComponentPropsWithoutRef<'ul'> & {
  onMouseLeave?: () => void
  menuItems: Array<{ Icon: FC; text: string }>
}

export const DropdownMenu: FC<DropdownProps> = ({
  className,
  onMouseLeave,
  menuItems,
  ...props
}) => {
  return (
    <ul
      className={clsx(
        'z-10 w-[180px] py-4 rounded-lg bg-white',
        className,
      )}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.text} {...item} />
      ))}
    </ul>
  )
}
