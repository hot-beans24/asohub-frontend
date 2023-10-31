import { InputHTMLAttributes, forwardRef } from 'react'

import FormFieldWrapper from '@@/features/form/components/FormFieldWrapper'

import styles from './styles'

type TextFiledProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  isPassword?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFiledProps>(({ label, error, isPassword, ...inputProps }, ref) => {
  return (
    <FormFieldWrapper label={label} error={error}>
      <input css={styles.textField(!!error, inputProps.readOnly)} placeholder=" " ref={ref} {...inputProps} />
    </FormFieldWrapper>
  )
})

export default TextField
