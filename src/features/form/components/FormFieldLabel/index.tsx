import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const FormFieldLabel: FC<PropsWithChildren> = ({ children }) => {
  return <span css={styles.formFieldLabel}>{children}</span>
}

export default FormFieldLabel
