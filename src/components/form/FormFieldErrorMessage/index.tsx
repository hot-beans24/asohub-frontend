import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { message, icon } from './style'

type FormFieldErrorMessageProps = {
  errorMessage: string
}

const FormFieldErrorMessage: FC<FormFieldErrorMessageProps> = ({ errorMessage }) => {
  return (
    <span css={message}>
      <FontAwesomeIcon css={icon} icon={faCircleExclamation} />
      {errorMessage}
    </span>
  )
}

export default FormFieldErrorMessage
