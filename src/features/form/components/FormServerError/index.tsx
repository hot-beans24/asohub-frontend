import { FC } from 'react'

import styles from './styles'

type FormServerErrorProps = {
  error: string
}

const FormServerError: FC<FormServerErrorProps> = ({ error }) => {
  return <div css={styles.errorMessage}>{error}</div>
}

export default FormServerError
