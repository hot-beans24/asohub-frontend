import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '@@/components/Logo'

import { container, header } from './styles'

const AuthLayout: FC = () => {
  return (
    <div css={container}>
      <header css={header}>
        <Logo />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
