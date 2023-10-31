import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import Logo from '@@/features/common/components/Logo'
import BreadCrumbs from '@@/features/layout/components/BreadCrumbs'
import SearchBar from '@@/features/layout/components/SearchBar'
import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import useUserState from '@@/features/auth/hooks/useUserState'

import ROUTES from '@@/routes/routes'

import styles from './styles'

type HeaderProps = {
  isLoggedIn: boolean
  isAuthPage: boolean
}

const Header: FC<HeaderProps> = ({ isLoggedIn, isAuthPage }) => {
  const navigate = useNavigate()
  const { setFlashMessages } = useFlashMessages()
  const { user } = useUserState()

  const handleLinkRepositoriesBtnClick = () => {
    if (user?.githubUserID && !user.isRepoRegistered) {
      navigate(ROUTES.LINK_REPOSITORIES)
    } else if (user?.isRepoRegistered) {
      setFlashMessages([
        { key: 'linkRepositoriesRegistered', type: 'error', message: 'Githubリポジトリは連携済みです' },
      ])
    } else {
      setFlashMessages([{ key: 'linkRepositoriesBtnError', type: 'error', message: 'GitHubアカウントが未連携です' }])
    }
  }

  return (
    <header css={styles.header(isAuthPage)}>
      <Logo />
      <BreadCrumbs />
      {!isAuthPage && <SearchBar />}
      {isLoggedIn && !isAuthPage && (
        <button type="button" css={styles.newRepositoryBtn} onClick={handleLinkRepositoriesBtnClick}>
          <FontAwesomeIcon icon={faFolderPlus} style={{ fontSize: 16 }} />
          リポジトリの連携
        </button>
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
