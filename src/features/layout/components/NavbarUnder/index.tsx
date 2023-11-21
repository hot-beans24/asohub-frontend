import { FC } from 'react'
import { faGear, faHouse, faMagnifyingGlass, faRightFromBracket, faRightToBracket, faUsers } from '@fortawesome/free-solid-svg-icons'

import useUserState from '@@/features/auth/hooks/useUserState'

import NavbarUnderLink from '@@/features/layout/components/NavbarUnderLink'

import ROUTES from '@@/routes/routes'

import styles from './styles'

type NavbarUnderProps = {
  isLoggedIn: boolean
  isAuthPage: boolean
}

const NavbarUnder: FC<NavbarUnderProps> = ({ isLoggedIn, isAuthPage }) => {
  const { user } = useUserState()


  if (isAuthPage) {
    return null
  }

  return (
    <nav css={styles.navbar}>
      <ul css={styles.navbarUl}>
        {!isLoggedIn && !user && (
          <li>
            <NavbarUnderLink path={ROUTES.LOGIN} label="ログイン" icon={faRightToBracket} />
          </li>
        )}
        {isLoggedIn && user && (
          <li>
            <NavbarUnderLink path={`/users/${user.id}`} label="マイページ" img={user.githubUserIcon} />
          </li>
        )}
        <li>
          <NavbarUnderLink path={ROUTES.USERS} label="ユーザー" icon={faUsers} />
        </li>
        <li>
          <NavbarUnderLink path={ROUTES.HOME} label="ホーム" icon={faHouse} />
        </li>
        <li>
          <NavbarUnderLink path={ROUTES.SEARCH} label="検索" icon={faMagnifyingGlass} />
        </li>
        {!isLoggedIn && !user && (
          <li>
            <NavbarUnderLink path={ROUTES.SIGNUP} label="サインアップ" icon={faRightFromBracket} />
          </li>
        )}
        {isLoggedIn && user && (
          <li>
            <NavbarUnderLink path={ROUTES.SETTING} label="設定" icon={faGear} />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavbarUnder
