import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  name: string
  email: string
  avatarSrc: string
}

export const Avatar: FC<AvatarProps> = ({
  name,
  email,
  avatarSrc,
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex items-center', className)} {...props}>
      <img
        src={avatarSrc}
        alt="Avatar image"
        className="w-10 h-10 rounded-full border-2 border-primary"
      />
      <div className="ml-2">
        <h4 className="text-xs font-semibold">{name}</h4>
        <p className="text-[10px] text-text-color/50 tracking-wide">{email}</p>
      </div>
    </div>
  )
}
