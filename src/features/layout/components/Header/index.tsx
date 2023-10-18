import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

import Logo from '@@/features/common/components/Logo'

import styles from './styles'

type HeaderProps = {
  isLoggedIn: boolean
  isAuthPage: boolean
}

const Header: FC<HeaderProps> = ({ isLoggedIn, isAuthPage }) => {
  return (
    <header css={styles.header(isAuthPage)}>
      <Logo />
      {isLoggedIn && !isAuthPage && (
        <Link to="/new-repository" css={styles.newRepositoryBtn}>
          <FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: 22 }} />
          新しくリポジトリを連携
        </Link>
      )}
    </header>
  )
}

export default Header