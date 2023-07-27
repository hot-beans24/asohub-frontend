import { FC } from 'react'

import { errorMessage } from './styles'

type FormServerErrorMessageProps = {
  message: string
}

const FormServerErrorMessage: FC<FormServerErrorMessageProps> = ({ message }) => {
  return (
    <div css={errorMessage}>{message}</div>
  )
}

export default FormServerErrorMessage