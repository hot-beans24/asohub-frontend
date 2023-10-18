import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { navLink, navLinkLabel } from './styles'

type NavbarLinkProps = {
  path: string
  label: string
  icon: IconDefinition
  isWide: boolean
  isRequiredLogin?: boolean
  isLoggedIn?: boolean
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, label, icon, isWide, isRequiredLogin, isLoggedIn }) => {
  if (isRequiredLogin && !isLoggedIn) {
    return null
  }

  return (
    <Link to={path} css={navLink(isWide)}>
      <FontAwesomeIcon icon={icon} style={{ width: 30, fontSize: 16 }} />
      <span css={navLinkLabel(isWide)}>{label}</span>
    </Link>
  )
}

export default NavbarLink
