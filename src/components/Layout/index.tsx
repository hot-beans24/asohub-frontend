import { FC, PropsWithChildren } from 'react'

import Logo from '@@/components/Logo'

import { main } from './style'

type LayoutProps = {}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <>
      <Logo />
      <main css={main}>{children}</main>
    </>
  )
}

export default Layout
