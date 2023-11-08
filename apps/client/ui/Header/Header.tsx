import { LogoIcon } from '@/ui/Icons/Logo/Logo'
import { NavMenu } from '@/ui/NavMenu/NavMenu'
import { InputSearch } from '@/ui/InputSearch/InputSearch'
import { Avatar } from '@/ui/Avatar/Avatar'
import type { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenuItem } from '@/store/HeaderSlice'
import { RootState } from '@/store/Store'

// TODO: remove the object when data will go from API
const mockedUserData = {
  name: 'Joachim Kowalski',
  email: 'j.kowalski@gmail.com',
  avatarSrc: '/avatar.svg',
}

export const Header: FC = () => {
  const dispatch = useDispatch()
  const activeMenuItem = useSelector(
    (state: RootState) => state.header.activeMenuItem,
  )

  const handleMenuHover = (item: string) => {
    dispatch(setActiveMenuItem(activeMenuItem !== item ? item : null))
  }

  const resetActiveMenuItem = () => {
    dispatch(setActiveMenuItem(null))
  }
  
  return (
    <header className="bg-inherit flex items-center py-14 justify-between gap-10">
      <div className="min-w-[600px] ml-20 w-[700px] flex justify-between items-center">
        <a href="/">
          <LogoIcon />
        </a>
        <NavMenu
          activeItem={activeMenuItem}
          onMouseOver={handleMenuHover}
          onMouseLeave={resetActiveMenuItem}
          onOptionSelect={resetActiveMenuItem}
        />
      </div>
      <div className="min-w-[450px] mr-20 flex justify-between">
        <InputSearch />
        <Avatar {...mockedUserData} />
      </div>
    </header>
  )
}
