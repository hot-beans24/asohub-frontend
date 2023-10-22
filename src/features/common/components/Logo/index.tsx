import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'

const Logo: FC = () => {
  return (
    <Link to="/home" css={styles.logo}>
      <img src="icon.svg" alt="icon" width={30} height={30} />
      AsoHub
    </Link>
  )
}

export default Logo
