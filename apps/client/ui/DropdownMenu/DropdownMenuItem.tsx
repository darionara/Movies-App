import type { FC, ComponentPropsWithoutRef, ComponentProps } from 'react';
import clsx from 'clsx';

type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  Icon: FC<ComponentProps<'svg'>>;
  text: string;
  resetActiveMenuItem: () => void;
};

const MenuItem: FC<MenuItemProps> = ({
  Icon,
  text,
  className,
  resetActiveMenuItem,
  ...props
}) => {
  return (
    <li
      className={clsx(
        'transition-ease-in-out p-3 transition-colors duration-200 hover:bg-gray-300',
        className,
      )}
      onClick={() => resetActiveMenuItem()}
      onKeyDown={() => resetActiveMenuItem()}
      role="menuitem"
      {...props}
    >
      <Icon className="mx-3 inline h-6 w-6 text-black-grey" />
      <span className="text-black-grey">{text}</span>
    </li>
  );
};

export default MenuItem;
