import { FC, PropsWithChildren } from 'react'

import { label } from './style'

const FormFieldLabel: FC<PropsWithChildren> = ({ children }) => {
  return <span css={label}>{children}</span>
}

export default FormFieldLabel
