import { FC, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRightToBracket, faSquarePlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'
import useUserState from '@@/features/auth/hooks/useUserState'

import Logo from '@@/components/Logo'
import UserIcon from '@@/features/user/components/UserIcon'
import NavbarLink from './components/NavbarLink'

import { navLinkData } from './navLinkData'

import {
  button,
  container,
  header,
  main,
  marginBottom,
  marginTop,
  nav,
  newPostBtn,
  ul,
  userWrapper,
  userName
} from './style'

const NormalLayout: FC = () => {
  const [isWide, setIsWide] = useState<boolean>(true)

  const handleClickButton = () => {
    setIsWide((prev) => !prev)
  }

  const { user } = useUserState()
  const { isLoggedIn } = useUserAuth()

  return (
    <div css={container}>
      <header css={header}>
        <Logo />
        {isLoggedIn() && (
          <button type="button" css={newPostBtn}>
            <FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: 22 }} />
            新しいリポジトリを投稿
          </button>
        )}
      </header>
      <nav css={nav(isWide)}>
        <ul css={ul}>
          <li>
            <button css={button} onClick={handleClickButton} type="button" aria-label="toggle">
              <FontAwesomeIcon icon={faBars} style={{ fontSize: 22 }} />
            </button>
          </li>
          <li css={marginBottom}>
            <Link to="/user" css={userWrapper(isWide, isLoggedIn())}>
              <UserIcon src={isLoggedIn() ? user!!.githubUserIcon : 'guest.png'} />
              <span css={userName(isWide)}>{isLoggedIn() ? user!!.name : 'Guest'}</span>
            </Link>
          </li>
          {navLinkData.map(({ path, label, icon, isRequiredLogin }) => (
            <li key={path}>
              <NavbarLink
                path={path}
                label={label}
                icon={icon}
                isWide={isWide}
                isRequiredLogin={isRequiredLogin}
                isLoggedIn={isLoggedIn()}
              />
            </li>
          ))}
          <li css={marginTop}>
            <NavbarLink
              path={isLoggedIn() ? '/logout' : '/login'}
              label={isLoggedIn() ? 'ログアウト' : 'ログイン'}
              icon={isLoggedIn() ? faRightFromBracket : faRightToBracket}
              isWide={isWide}
            />
          </li>
        </ul>
      </nav>
      <main css={main}>
        <Outlet />
      </main>
    </div>
  )
}

export default NormalLayout
