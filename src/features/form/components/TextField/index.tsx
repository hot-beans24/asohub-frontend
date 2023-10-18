import { InputHTMLAttributes, forwardRef } from 'react'

import FormFieldWrapper from '@@/features/form/components/FormFieldWrapper'

import styles from './styles'

type TextFiledProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  isPassword?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFiledProps>(({ label, error, isPassword, ...inputProps }, ref) => {
  // const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  // const inputRef = useRef<HTMLInputElement>(null)

  // const handleEyeClick = () => {
  //   setIsShowPassword(!isShowPassword)
  //   if (inputRef.current?.type === 'text') {
  //     inputRef.current?.setAttribute('type', 'password')
  //   } else {
  //     inputRef.current?.setAttribute('type', 'text')
  //   }
  // }

  return (
    <FormFieldWrapper label={label} error={error}>
      {isPassword &&
        // <button type="button" aria-label="mask password" css={styles.pwMask} onClick={handleEyeClick}>
        //   <FontAwesomeIcon icon={isShowPassword ? faEye : faEyeSlash} />
        // </button>
        null}
      <input css={styles.textField(!!error, inputProps.readOnly)} placeholder=" " ref={ref} {...inputProps} />
    </FormFieldWrapper>
  )
})

export default TextField
