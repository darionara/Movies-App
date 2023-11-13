import {
  FireIcon,
  PlayIcon,
  CalendarDaysIcon,
  StarIcon,
} from '@heroicons/react/20/solid';
import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveMenuItem } from '@/store/HeaderSlice';
import { RootState } from '@/store/store';
import DropdownMenu from '@/ui/DropdownMenu/DropdownMenu';

const menuItems = ['TV Shows', 'Movies', 'Series', 'Animations'];

const dropdownMenuItems = [
  {
    Icon: FireIcon,
    text: 'Popular',
  },
  {
    Icon: PlayIcon,
    text: 'Now Playing',
  },
  {
    Icon: CalendarDaysIcon,
    text: 'Upcoming',
  },
  {
    Icon: StarIcon,
    text: 'Top Rated',
  },
];

type NavMenuProps = ComponentPropsWithoutRef<'ul'>;

const NavMenu: FC<NavMenuProps> = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector(
    (state: RootState) => state.header.activeMenuItem,
  );

  const handleMenuHover = (item: string) => {
    dispatch(setActiveMenuItem(item));
  };

  const resetActiveMenuItem = () => {
    dispatch(setActiveMenuItem(null));
  };

  return (
    <ul className={clsx('flex flex-row gap-8', className)} {...props}>
      {menuItems.map((item) => (
        <li
          key={item}
          className={clsx(
            'relative h-12 cursor-default whitespace-nowrap text-lg font-bold capitalize leading-[48px]',
            {
              'transition-ease-in-out transition-colors duration-100 hover:text-text-color':
                !activeMenuItem,
              'cursor-pointer text-text-color': activeMenuItem === item,
              'text-text-color/[.50]': activeMenuItem !== item,
            },
          )}
          onMouseOver={() => handleMenuHover(item)}
          onFocus={() => handleMenuHover(item)}
          onMouseLeave={() => resetActiveMenuItem()}
        >
          {item}
          {activeMenuItem === item && (
            <DropdownMenu
              className="absolute text-sm font-semibold"
              menuItems={dropdownMenuItems}
              resetActiveMenuItem={resetActiveMenuItem}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
