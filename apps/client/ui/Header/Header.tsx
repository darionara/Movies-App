import { LogoIcon } from '@/ui/Icons/Logo/Logo'
import { NavMenu } from '@/ui/NavMenu/NavMenu'
import { InputSearch } from '@/ui/InputSearch/InputSearch'
import { Avatar } from '@/ui/Avatar/Avatar'
import { useState } from 'react'
import type { FC } from 'react'

// TODO: remove the object when data will go from API
const mockedUserData = {
  name: 'Joachim Kowalski',
  email: 'j.kowalski@gmail.com',
  avatarSrc: '/avatar.svg',
}

export const Header: FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>(null)
  
  const handleMenuHover = (item: string) => {
    setActiveMenuItem((prevItem) => {
      return prevItem !== item ? item : null
    })
  }

  const resetActiveMenuItem = () => {
    setActiveMenuItem(null)
  }
  
  const handleDropdownMouseLeave = resetActiveMenuItem
  const handleOptionSelect = resetActiveMenuItem

  return (
    <header className="bg-inherit flex items-center py-14 justify-between gap-10">
      <div className="min-w-[600px] ml-20 w-[700px] flex justify-between items-center">
        <a href="/">
          <LogoIcon />
        </a>
        <NavMenu
          activeItem={activeMenuItem}
          onMouseOver={handleMenuHover}
          onMouseLeave={handleDropdownMouseLeave}
          onOptionSelect={handleOptionSelect}
        />
      </div>
      <div className="min-w-[450px] mr-20 flex justify-between">
        <InputSearch />
        <Avatar {...mockedUserData} />
      </div>
    </header>
  )
}
