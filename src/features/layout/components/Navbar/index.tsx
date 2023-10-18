import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import useUserState from '@@/features/auth/hooks/useUserState'

import UserIcon from '@@/features/user/components/UserIcon'

import NavbarLink from '@@/features/layout/components//NavbarLink'
import navbarData from '@@/features/layout/data/navbarData'
import styles from './styles'

type NavbarProps = {
  isLoggedIn: boolean
  isAuthPage: boolean
}

const Navbar: FC<NavbarProps> = ({ isLoggedIn, isAuthPage }) => {
  const [isWide, setIsWide] = useState<boolean>(true)
  const { user } = useUserState()

  const handleToggleWidthClick = () => {
    setIsWide((prev) => !prev)
  }

  if (isAuthPage) {
    return null
  }

  return (
    <nav css={styles.navbar(isWide)}>
      <ul css={styles.navbarUl}>
        <li>
          <button type="button" aria-label="toggle width" css={styles.toggleWidthBtn} onClick={handleToggleWidthClick}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 22 }} />
          </button>
        </li>
        <li css={styles.marginBottom}>
          <Link to="/user" css={styles.userWrapper(isWide, isLoggedIn)}>
            <UserIcon src={isLoggedIn ? user!!.githubUserIcon : 'guest.png'} />
            <span css={styles.userName(isWide)}>{isLoggedIn ? user!!.name : 'Guest'}</span>
          </Link>
        </li>
        {navbarData.map(({ path, label, icon, isLastPosition, isRequiredLogin }) => {
          if ((isRequiredLogin && !isLoggedIn) || (isLoggedIn && path === '/login')) {
            return null
          }
          return (
            <li key={path} css={isLastPosition && styles.navbarLiLast}>
              <NavbarLink path={path} label={label} icon={icon} isWide={isWide} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
