import type { FC, ComponentPropsWithoutRef } from 'react'

type InputTextProps = ComponentPropsWithoutRef<'input'> & {
  placeholder?: string
}

export const InputText: FC<InputTextProps> = ({
  placeholder = 'Filter by keywords...',
  ...props
}) => {
  return (
    <input
      type="text"
      className='text-white/35 bg-input-color px-4 py-3 focus:outline-none rounded-md'
      placeholder={placeholder}
      {...props}
    />
  )
}
