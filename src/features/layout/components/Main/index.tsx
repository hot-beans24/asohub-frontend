import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import useWide from '@@/features/layout/hooks/useWide'

import styles from './styles'

type MainProps = {
  isAuthPage: boolean
}

const Main: FC<MainProps> = ({ isAuthPage }) => {
  const { isWide } = useWide()

  return (
    <main css={styles.main(isWide, isAuthPage)}>
      <Outlet />
    </main>
  )
}

export default Main
