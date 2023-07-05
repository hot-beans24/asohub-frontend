import { FC } from 'react'
import { Link } from 'react-router-dom'
import icon from '/icon.svg'

import { logo } from './style'

const Logo: FC = () => {
  return (
    <Link css={logo} to="/">
      <img src={icon} alt="icon" width={30} height={30} />
      AsoHub
    </Link>
  )
}

export default Logo
