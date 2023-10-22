import { FC, forwardRef, SelectHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import FormFieldWrapper from '@@/features/form/components/FormFieldWrapper'
import SelectOption from '@@/features/form/types/SelectOption'

import styles from './styles'

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
  options: SelectOption[]
  isReadOnly?: boolean
}

const SelectField: FC<SelectFieldProps> = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, options, isReadOnly, ...selectProps }, ref) => {
    return (
      <FormFieldWrapper label={label} error={error}>
        <FontAwesomeIcon css={styles.arrowIcon(isReadOnly)} icon={faCaretDown} size="lg" />
        <select css={styles.selectField(!!error, isReadOnly)} defaultValue="" ref={ref} {...selectProps}>
          {options.map((option) => (
            <option css={styles.option} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormFieldWrapper>
    )
  }
)

export default SelectField
