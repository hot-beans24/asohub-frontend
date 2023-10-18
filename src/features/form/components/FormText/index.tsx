import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const FormText: FC<PropsWithChildren> = ({ children }) => {
  return <p css={styles.formText}>{children}</p>
}

export default FormText
