import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { MenuItem } from '@/ui/DropdownMenu/DropdownMenuItem'

type DropdownProps = ComponentPropsWithoutRef<'ul'> & {
  onOptionSelect?: () => void
  menuItems: Array<{ Icon: FC; text: string }>
}

export const DropdownMenu: FC<DropdownProps> = ({
  className,
  onOptionSelect,
  menuItems,
  ...props
}) => {
  return (
    <ul
      className={clsx(
        'z-10 w-[180px] py-4 rounded-lg bg-white',
        className,
      )}
      {...props}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.text} onOptionSelect={onOptionSelect} {...item} />
      ))}
    </ul>
  )
}
