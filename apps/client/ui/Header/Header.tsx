import type { FC } from 'react';

import { LogoIcon } from '@/ui/Icons/Logo/Logo';
import NavMenu from '@/ui/NavMenu/NavMenu';
import { InputSearch } from '@/ui/InputSearch/InputSearch';
import { Avatar } from '@/ui/Avatar/Avatar';

// TODO: remove the object when data will go from API
const mockedUserData = {
  name: 'Joachim Kowalski',
  email: 'j.kowalski@gmail.com',
  avatarSrc: '/avatar.svg',
};

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between gap-10 bg-inherit py-14">
      <div className="ml-20 flex w-[700px] min-w-[600px] items-center justify-between">
        <a href="/" aria-label="logo">
          <LogoIcon />
        </a>
        <NavMenu />
      </div>
      <div className="mr-20 flex min-w-[450px] justify-between">
        <InputSearch />
        <Avatar {...mockedUserData} />
      </div>
    </header>
  );
};

export default Header;
