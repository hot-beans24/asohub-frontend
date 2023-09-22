import { FC } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-absolute-path
import icon from '/icon.svg'

import { logo } from './styles'

type LogoProps = {
  isAuthPage?: boolean
}

const Logo: FC<LogoProps> = ({ isAuthPage }) => {
  return (
    <Link css={logo(isAuthPage)} to="/">
      <img src={icon} alt="icon" width={30} height={30} />
      AsoHub
    </Link>
  )
}

export default Logo
