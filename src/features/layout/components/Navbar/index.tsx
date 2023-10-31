import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faGear,
  faHouse,
  faRightFromBracket,
  faRightToBracket,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import useUserState from '@@/features/auth/hooks/useUserState'

import NavbarLink from '@@/features/layout/components//NavbarLink'
import useWide from '@@/features/layout/hooks/useWide'

import UserIcon from '@@/features/user/components/UserIcon'

import ROUTES from '@@/routes/routes'

import styles from './styles'

type NavbarProps = {
  isLoggedIn: boolean
  isAuthPage: boolean
}

const Navbar: FC<NavbarProps> = ({ isLoggedIn, isAuthPage }) => {
  const { isWide, toggleWide } = useWide()
  const { user } = useUserState()

  if (isAuthPage) {
    return null
  }

  return (
    <nav css={styles.navbar(isWide)}>
      <ul css={styles.navbarUl}>
        <li>
          <button type="button" aria-label="toggle width" css={styles.toggleWidthBtn} onClick={toggleWide}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 22 }} />
          </button>
        </li>
        <li css={styles.marginBottom}>
          <Link to={`/users/${user?.id}` || ROUTES.HOME} css={styles.userWrapper(isWide, isLoggedIn)}>
            <UserIcon src={isLoggedIn && user ? user.githubUserIcon : '/guest.png'} />
            <span css={styles.userName(isWide)}>{isLoggedIn ? user!!.name : 'Guest'}</span>
          </Link>
        </li>
        <li>
          <NavbarLink path={ROUTES.HOME} label="ホーム" icon={faHouse} />
        </li>
        <li>
          <NavbarLink path={ROUTES.USERS} label="ユーザー" icon={faUsers} />
        </li>
        {isLoggedIn && user && (
          <>
            <li>
              <NavbarLink path={`/users/${user.id}`} label="マイページ" icon={faUser} />
            </li>
            <li>
              <NavbarLink path={ROUTES.SETTING} label="設定" icon={faGear} />
            </li>
            <li css={styles.navbarLiLast}>
              <NavbarLink path={ROUTES.LOGOUT} label="ログアウト" icon={faRightFromBracket} />
            </li>
          </>
        )}
        {!isLoggedIn && !user && (
          <li css={styles.navbarLiLast}>
            <NavbarLink path={ROUTES.LOGIN} label="ログイン" icon={faRightToBracket} />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
