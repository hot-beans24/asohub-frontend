import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'

type FormFieldErrorProps = {
  error: string
}

const FormFieldError: FC<FormFieldErrorProps> = ({ error }) => {
  return (
    <span css={styles.errorMessage}>
      <FontAwesomeIcon css={styles.errorIcon} icon={faCircleExclamation} />
      {error}
    </span>
  )
}

export default FormFieldError
