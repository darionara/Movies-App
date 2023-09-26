import type { FC, ComponentPropsWithoutRef } from 'react'

type InputTextProps = ComponentPropsWithoutRef<'input'> 

export const InputText: FC<InputTextProps> = ({
  placeholder = 'Filter by keywords...',
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className='px-4 py-3 bg-input-color text-white/35 rounded-md focus:outline-none'
      placeholder={placeholder}
      {...props}
    />
  )
}
