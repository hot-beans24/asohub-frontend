import { FC } from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '@@/routes/routes'

import styles from './styles'

const Logo: FC = () => {
  return (
    <Link to={ROUTES.HOME} css={styles.logo}>
      <img src="/icon.svg" alt="icon" width={30} height={30} />
      AsoHub
    </Link>
  )
}

export default Logo
