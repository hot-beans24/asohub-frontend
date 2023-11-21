import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { Global } from '@emotion/react'
import { ModalProvider } from 'react-hooks-use-modal'

import grobalStyles from '@@/styles/globalStyles'

import Init from '@@/Init'

import Router from '@@/routes/Router'

const App: FC = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Overlay = () => {
    return (
      <div css={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 3000
      }} />
    )
  }

  return (
    <RecoilRoot>
      <Global styles={grobalStyles} />
      <ModalProvider components={{ Overlay }}>
        <Init />
        <Router />
      </ModalProvider>
    </RecoilRoot>
  )
}

export default App
