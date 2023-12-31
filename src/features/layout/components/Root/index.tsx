import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '@@/features/layout/components/Header'
import Navbar from '@@/features/layout/components/Navbar'
import NavbarUnder from '@@/features/layout/components/NavbarUnder'
import Main from '@@/features/layout/components/Main'
import FlashMessages from '@@/features/common/components/FlashMessages'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

import styles from './styles'

const Root: FC = () => {
  const location = useLocation()
  const { isLoggedIn } = useUserAuth()

  const authPagePaths = ['/login', '/logout', '/signup']

  const isAuthPage = authPagePaths.includes(location.pathname)

  return (
    <div css={styles.root}>
      <Header isLoggedIn={isLoggedIn()} isAuthPage={isAuthPage} />
      <Navbar isLoggedIn={isLoggedIn()} isAuthPage={isAuthPage} />
      <NavbarUnder isLoggedIn={isLoggedIn()} isAuthPage={isAuthPage} />
      <Main isAuthPage={isAuthPage} />
      <FlashMessages />
    </div>
  )
}

export default Root
