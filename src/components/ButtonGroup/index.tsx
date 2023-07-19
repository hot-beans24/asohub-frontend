import { FC, PropsWithChildren } from 'react'

import { group } from './style'

const ButtonGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div css={group}>{children}</div>
}

export default ButtonGroup
