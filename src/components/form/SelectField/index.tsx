import { FC, forwardRef, SelectHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { SelectOption } from '@@/pages/Signup/data/selectOptions'
import { FormFieldWrapper } from '@@/components/Form'

import { selectField, opt, icon } from './styles'

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  errorMessage?: string
  options: SelectOption[]
  isReadOnly?: boolean
}
const SelectField: FC<SelectFieldProps> = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, errorMessage, options, isReadOnly, ...selectProps }, ref) => {
    return (
      <FormFieldWrapper label={label} errorMessage={errorMessage}>
        <FontAwesomeIcon css={icon(isReadOnly)} icon={faCaretDown} size="lg" />
        <select css={selectField(!!errorMessage, isReadOnly)} defaultValue="" ref={ref} {...selectProps}>
          {options.map((option) => (
            <option css={opt} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormFieldWrapper>
    )
  }
)

export default SelectField
