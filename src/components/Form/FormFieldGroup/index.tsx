import { FC, PropsWithChildren } from 'react'

import { group } from './styles'

const FormFieldGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div css={group}>{children}</div>
}

export default FormFieldGroup
