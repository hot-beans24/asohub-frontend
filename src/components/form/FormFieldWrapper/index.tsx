import { FC, PropsWithChildren } from 'react'

import FormFieldLabel from '@@/components/form/FormFieldLabel'
import FormFieldErrorMessage from '@@/components/form/FormFieldErrorMessage'
import { wrapper } from './style'

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
