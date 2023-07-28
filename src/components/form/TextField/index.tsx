import { useRef, useState, InputHTMLAttributes, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import FormFieldWrapper  from '@@/components/Form/FormFieldWrapper'

import { textField, pwMask } from './styles'

type TextFiledProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  errorMessage?: string
  isPassword?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFiledProps>(
  ({ label, errorMessage, isPassword, ...inputProps }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleEyeClick = () => {
      setIsShowPassword(!isShowPassword)
      if (inputRef.current?.type === 'text') {
        inputRef.current?.setAttribute('type', 'password')
      } else {
        inputRef.current?.setAttribute('type', 'text')
      }
    }

    return (
      <FormFieldWrapper label={label} errorMessage={errorMessage}>
        {isPassword && (
          <button type="button" aria-label="mask password" css={pwMask} onClick={handleEyeClick}>
            <FontAwesomeIcon icon={isShowPassword ? faEye : faEyeSlash} />
          </button>
        )}
        <input css={textField(!!errorMessage, inputProps.readOnly)} placeholder=" " ref={ref} {...inputProps} />
      </FormFieldWrapper>
    )
  }
)

export default TextField
