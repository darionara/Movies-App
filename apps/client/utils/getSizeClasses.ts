import { InputProps } from '@types/InputType'

export const getSizeClasses = (size: InputProps['size']): string => {
    switch (size) {
      case 'small': {
        return 'w-48'
      }
      case 'large': {
        return 'w-80'
      }
      default: {
        return 'w-64'
      }
    }
  }