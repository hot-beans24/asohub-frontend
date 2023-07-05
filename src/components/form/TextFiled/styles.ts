import { css } from '@emotion/react'

import { formFieldBase } from '@@/styles/formFieldBaseStyle'

export const textField = (isError: boolean, isReadOnly?: boolean) => css`
  ${formFieldBase(isError, isReadOnly)}
`

export const pwMask = css`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: var(--dark-gray);
  position: absolute;
  inset: 12px 12px auto auto;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
  }
`
