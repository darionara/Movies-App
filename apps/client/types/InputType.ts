import { ComponentPropsWithoutRef } from "react"

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  size?: 'small' | 'medium' | 'large'
  placeholder?: string
  onClick?: () => void
}