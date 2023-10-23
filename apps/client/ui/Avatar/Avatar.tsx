import type { FC, ComponentPropsWithoutRef } from 'react'

type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  name: string
  email: string
  avatarSrc: string
}

export const Avatar: FC<AvatarProps> = ({ name, email, avatarSrc}) => {
  return (
    <div className="flex items-center">
      <img src={avatarSrc} alt='Avatar image' className="w-10 h-10 rounded-full border-2 border-primary" />
      <div className="ml-2">
        <h4 className="text-xs font-semibold">{name}</h4>
        <p className="text-[10px] text-text-color/50 tracking-wide">{email}</p>
      </div>
    </div>
  )
}
