import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '@@/components/Logo'

import { main } from './style'

const AuthLayout: FC = () => {
  return (
    <>
      <Logo />
      <main css={main}>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout
