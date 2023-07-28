import { FC, PropsWithChildren } from 'react'

import FormFieldLabel from '../FormFieldLabel'
import FormFieldErrorMessage from '../FormFieldErrorMessage'

import { wrapper } from './styles'

type FormFieldWrapperProps = {
  label: string
  errorMessage?: string
}

const FormFiledWrapper: FC<PropsWithChildren<FormFieldWrapperProps>> = ({ label, errorMessage, children }) => {
  return (
    <div>
      <div css={wrapper}>
        {children}
        <FormFieldLabel>{label}</FormFieldLabel>
        {errorMessage && <FormFieldErrorMessage errorMessage={errorMessage} />}
      </div>
    </div>
  )
}

export default FormFiledWrapper
