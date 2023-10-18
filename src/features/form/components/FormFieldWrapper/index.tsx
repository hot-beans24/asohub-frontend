import { FC, PropsWithChildren } from 'react'

import FormFieldLabel from '@@/features/form/components/FormFieldLabel'
import FormFieldError from '@@/features/form/components/FormFieldError'

import styles from './styles'

type FormFieldWrapperProps = PropsWithChildren<{
  label: string
  error?: string
}>

const FormFiledWrapper: FC<FormFieldWrapperProps> = ({ label, error, children }) => {
  return (
    <div>
      <div css={styles.formFieldWrapper}>
        {children}
        <FormFieldLabel>{label}</FormFieldLabel>
        {error && <FormFieldError error={error} />}
      </div>
    </div>
  )
}

export default FormFiledWrapper
