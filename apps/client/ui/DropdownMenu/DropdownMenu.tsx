import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import MenuItem from '@/ui/DropdownMenu/DropdownMenuItem';

type DropdownProps = ComponentPropsWithoutRef<'ul'> & {
  menuItems: Array<{ Icon: FC; text: string }>;
  resetActiveMenuItem: () => void;
};

const DropdownMenu: FC<DropdownProps> = ({
  className,
  menuItems,
  resetActiveMenuItem,
  ...props
}) => {
  return (
    <ul
      className={clsx('z-10 w-[180px] rounded-lg bg-white py-4', className)}
      {...props}
      onMouseLeave={() => resetActiveMenuItem()}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.text}
          resetActiveMenuItem={resetActiveMenuItem}
          {...item}
        />
      ))}
    </ul>
  );
};

export default DropdownMenu;
