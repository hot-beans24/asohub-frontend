import { FC } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

import styles from './styles'

const Link: FC<LinkProps> = ({ children, to }) => {
  return (
    <RouterLink to={to} css={styles.link}>
      {children}
    </RouterLink>
  )
}

export default Link
