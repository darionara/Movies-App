import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  name: string;
  email: string;
  avatarSrc: string;
};

const Avatar: FC<AvatarProps> = ({
  name,
  email,
  avatarSrc,
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex items-center min-w-[40px]', className)} {...props}>
      <Image
        src={avatarSrc}
        alt="Avatar"
        className="rounded-full border-2 border-primary"
        width={40}
        height={40}
      />
      <div className="ml-2 hidden xl:block">
        <h4 className="text-xs font-semibold">{name}</h4>
        <p className="text-[10px] tracking-wide text-text-color/50">{email}</p>
      </div>
    </div>
  );
};

export default Avatar;
