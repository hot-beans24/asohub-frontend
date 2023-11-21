import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Img } from 'react-image'

import styles from './styles'

type NavbarUnderLinkProps = {
  path: string
  label: string
  icon?: IconDefinition
  img?: string
}

const NavbarUnderLink: FC<NavbarUnderLinkProps> = ({ path, label, icon, img }) => {
  return (
    <Link to={path} css={styles.link}>
      <span css={styles.icon}>
        {img && <Img src={img} css={styles.img} alt="user icon"/>}
        {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: 14 }} />}
      </span>
      <span css={styles.label}>{label}</span>
    </Link>
  )
}

export default NavbarUnderLink
