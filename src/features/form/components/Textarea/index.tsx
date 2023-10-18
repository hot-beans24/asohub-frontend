import { TextareaHTMLAttributes, forwardRef } from 'react'

import FormFieldWrapper from '@@/features/form/components/FormFieldWrapper'

import styles from './styles'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, ...textareaProps }, ref) => {
  return (
    <FormFieldWrapper label={label} error={error}>
      <textarea css={styles.textarea(!!error)} placeholder=" " ref={ref} {...textareaProps} />
    </FormFieldWrapper>
  )
})

export default Textarea
