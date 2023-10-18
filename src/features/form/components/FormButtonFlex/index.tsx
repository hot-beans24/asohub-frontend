import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const ButtonGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.formButtonFlex}>{children}</div>
}

export default ButtonGroup
