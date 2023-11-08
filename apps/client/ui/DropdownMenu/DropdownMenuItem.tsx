import type { FC, ComponentPropsWithoutRef, ComponentProps } from 'react'
import clsx from 'clsx'

type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  Icon: FC<ComponentProps<'svg'>>
  text: string
  onOptionSelect?: () => void
}

export const MenuItem: FC<MenuItemProps> = ({
  Icon,
  text,
  className,
  onOptionSelect,
  ...props
}) => (
  <li
    className={clsx(
      'p-3 hover:bg-gray-300 transition-colors transition-ease-in-out duration-200',
      className,
    )}
    onClick={onOptionSelect}
    {...props}
  >
    <Icon className="h-6 w-6 inline mx-3 text-black-grey" />
    <span className="text-black-grey">{text}</span>
  </li>
)
