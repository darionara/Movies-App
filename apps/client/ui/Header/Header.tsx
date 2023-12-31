import type { FC } from 'react';

import LogoIcon from '@/ui/Icons/Logo/Logo';
import NavMenu from '@/ui/NavMenu/NavMenu';
import InputSearch from '@/ui/InputSearch/InputSearch';
import Avatar from '@/ui/Avatar/Avatar';

// TODO: remove the object when data will go from API
const mockedUserData = {
  name: 'Joachim Kowalski',
  email: 'j.kowalski@gmail.com',
  avatarSrc: '/avatar.svg',
};

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between bg-inherit py-14 gap-8">
      <div className="flex gap-[124px] items-center">
        <a href="/" aria-label="logo">
          <LogoIcon />
        </a>
        <NavMenu />
      </div>
      <div className="flex justify-between gap-4">
        <InputSearch />
        <Avatar {...mockedUserData} />
      </div>
    </header>
  );
};

export default Header;
