import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const SettingBox: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.box}>{children}</div>
}

export default SettingBox
