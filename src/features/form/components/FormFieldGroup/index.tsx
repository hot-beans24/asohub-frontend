import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const FormFieldGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.formFieldGroup}>{children}</div>
}

export default FormFieldGroup
