import { TextareaHTMLAttributes, forwardRef } from 'react'

import FormFieldWrapper from '@@/components/Form/FormFieldWrapper'

import { textarea } from './styles'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  errorMessage?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorMessage, ...textareaProps }, ref) => {
    return (
      <FormFieldWrapper label={label} errorMessage={errorMessage}>
        <textarea
          css={textarea(!!errorMessage)}
          placeholder=" "
          ref={ref}
          {...textareaProps}
        />
      </FormFieldWrapper>
    )
  }
)

export default Textarea
