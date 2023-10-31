import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './styles'

type MainProps = {
  isAuthPage: boolean
}

const Main: FC<MainProps> = ({ isAuthPage }) => {
  return (
    <main css={styles.main(isAuthPage)}>
      <Outlet />
    </main>
  )
}

export default Main
