import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import useWide from '@@/features/layout/hooks/useWide'

import styles from './styles'

type NavbarLinkProps = {
  path: string
  label: string
  icon: IconDefinition
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, label, icon }) => {
  const { isWide } = useWide()

  return (
    <Link to={path} css={styles.navLink(isWide)}>
      <FontAwesomeIcon icon={icon} style={{ width: 30, fontSize: 16 }} />
      <span css={styles.navLinkLabel(isWide)}>{label}</span>
    </Link>
  )
}

export default NavbarLink
