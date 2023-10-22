import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { Global } from '@emotion/react'

import grobalStyles from '@@/styles/globalStyles'

import Init from '@@/Init'

import Router from '@@/routes/Router'

const App: FC = () => {
  return (
    <RecoilRoot>
      <Global styles={grobalStyles} />
      <Init />
      <Router />
    </RecoilRoot>
  )
}

export default App
