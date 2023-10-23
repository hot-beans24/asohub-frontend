import { FC } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

import styles from './styles'

const Link: FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <RouterLink to={to} css={styles.link} {...props}>
      {children}
    </RouterLink>
  )
}

export default Link
