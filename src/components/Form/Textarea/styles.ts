import { css } from '@emotion/react'

import { formFieldBase } from '@@/styles/baseStyles'

export const textarea = (isError: boolean, isReadOnly?: boolean) => css`
  ${formFieldBase(isError, isReadOnly)}

  height: 200px;
  padding: 20px;
  resize: none;
`