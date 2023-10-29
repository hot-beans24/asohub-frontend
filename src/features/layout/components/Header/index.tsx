import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import Logo from '@@/features/common/components/Logo'
import BreadCrumbs from '@@/features/layout/components/BreadCrumbs'
import SearchBar from '@@/features/layout/components/SearchBar'

import ROUTES from '@@/routes/routes'

import styles from './styles'

type HeaderProps = {
  isLoggedIn: boolean
  isAuthPage: boolean
}

const Header: FC<HeaderProps> = ({ isLoggedIn, isAuthPage }) => {
  return (
    <header css={styles.header(isAuthPage)}>
      <Logo />
      <BreadCrumbs />
      {!isAuthPage && <SearchBar />}
      {isLoggedIn && !isAuthPage && (
        <Link to="/new-repository" css={styles.newRepositoryBtn}>
          <FontAwesomeIcon icon={faFolderPlus} style={{ fontSize: 16 }} />
          リポジトリの連携
        </Link>
      )}
      {!isLoggedIn && !isAuthPage && (
        <div css={styles.linksWrapper}>
          <Link to={ROUTES.LOGIN} css={styles.link}>
            Log in
          </Link>
          <span css={styles.divider}>/</span>
          <Link to={ROUTES.SIGNUP} css={styles.link}>
            Sing up
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
