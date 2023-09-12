import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '@@/components/Logo'

const AuthLayout: FC = () => {
  return (
    <>
      <Logo />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout
