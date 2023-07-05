import { css } from '@emotion/react'

import { formFieldBase } from '@@/styles/formFieldBaseStyle'

export const selectField = (isError: boolean, isReadOnly?: boolean) => css`
  ${formFieldBase(isError, isReadOnly)}

  cursor: pointer;
  span {
    font-size: 5.0rem;
  }
`

export const opt = css`
  cursor: pointer;
`

export const icon = (isReadOnly?: boolean) => css`
  border-radius: 100%;
  color: var(--dark-gray);
  position: absolute;
  inset: 16px 24px auto auto;
  cursor: pointer;
  pointer-events: none;
  ${isReadOnly && 'display: none;'}
`