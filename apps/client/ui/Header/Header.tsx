import { LogoIcon } from '@/ui/Icons/Logo/Logo'
import { NavMenu } from '@/ui/NavMenu/NavMenu'
import { InputSearch } from '@/ui/InputSearch/InputSearch'
import { Avatar } from '@/ui/Avatar/Avatar'
import { useState } from 'react'
import type { FC, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenuItem, closeDropdown, setIsDropdownOpen } from '@/store/HeaderSlice'

// TODO: remove the object when data will go from API
const mockedUserData = {
  name: 'Joachim Kowalski',
  email: 'j.kowalski@gmail.com',
  avatarSrc: '/avatar.svg',
}

type HeaderProps = ComponentPropsWithoutRef<'header'> & {
  className?: string
}

export const Header: FC<HeaderProps> = ({className}) => {
  const dispatch = useDispatch()
  const activeMenuItem = useSelector(state => state.header.activeMenuItem)
  const isDropdownOpen = useSelector(state => state.header.isDropdownOpen)
  console.log(activeMenuItem)

  //const [activeMenuItem, setActiveMenuItem] = useState<string | null>('Movies')
  //const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleMenuHover = (item: string) => {
    dispatch(setActiveMenuItem(activeMenuItem !== item ? item : null))
    dispatch(setIsDropdownOpen(activeMenuItem !== item))
  /*   setActiveMenuItem((prevItem) => {
      setIsDropdownOpen(prevItem !== item)

      return prevItem !== item ? item : null
    }) */
  }

  const handleDropdownMouseLeave = () => {
    dispatch(closeDropdown())
    //setIsDropdownOpen(false)
  }

  return (
    <header
      className={clsx(
        'bg-inherit flex items-center py-14 justify-between gap-10',
        className,
      )}
    >
      <div className="min-w-[600px] ml-20 w-[700px] flex justify-between">
        <a href="/">
          <LogoIcon />
        </a>
        <NavMenu
          isOpen={isDropdownOpen}
          activeItem={activeMenuItem}
          onHover={handleMenuHover}
          onMouseLeave={handleDropdownMouseLeave}
        />
      </div>
      <div className="min-w-[450px] mr-20 flex justify-between">
        <InputSearch />
        <Avatar {...mockedUserData} />
      </div>
    </header>
  )
}
