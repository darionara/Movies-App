import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type InputTextProps = ComponentPropsWithoutRef<'input'>

export const InputText: FC<InputTextProps> = ({
  placeholder = 'Filter by keywords...',
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className={clsx(
        'text-white/35 bg-input-color px-4 py-3 focus:outline-none rounded-md',
        className,
      )}
      placeholder={placeholder}
      {...props}
    />
  )
}
