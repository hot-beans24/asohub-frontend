import { FC } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-absolute-path
import icon from '/icon.svg'

import { logo } from './styles'

const Logo: FC = () => {
  return (
    <Link css={logo} to="/">
      <img src={icon} alt="icon" width={30} height={30} />
      AsoHub
    </Link>
  )
}

export default Logo
