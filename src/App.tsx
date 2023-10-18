import { FC } from 'react'
import { Global } from '@emotion/react'

import grobalStyles from '@@/styles/globalStyles'

import Router from './Router'
import Providers from './Providers'

import Init from './Init'

const App: FC = () => {
  return (
    <Providers>
      <Init />
      <Global styles={grobalStyles} />
      <Router />
    </Providers>
  )
}

export default App
