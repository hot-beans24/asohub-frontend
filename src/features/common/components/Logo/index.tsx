import { FC } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-absolute-path
import asohubIcon from '/icon.svg'

import styles from './styles'

const Logo: FC = () => {
  return (
    <Link to="/home" css={styles.logo}>
      <img src={asohubIcon} alt="icon" width={30} height={30} />
      AsoHub
    </Link>
  )
}

export default Logo
