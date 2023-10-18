import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './styles'

type MainProps = {
  isAuthPage: boolean
}

const Main: FC<MainProps> = ({ isAuthPage }) => {
  return (
    <div css={styles.main(isAuthPage)}>
      <Outlet />
    </div>
  )
}

export default Main
