import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { Global } from '@emotion/react'

import grobalStyles from '@@/styles/globalStyles'

import Router from './routes/Router'

// import Init from './Init'

const App: FC = () => {
  return (
    <RecoilRoot>
      {/* <Init /> */}
      <Global styles={grobalStyles} />
      <Router />
    </RecoilRoot>
  )
}

export default App
