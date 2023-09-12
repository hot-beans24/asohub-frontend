import { css } from '@emotion/react'

export const skip = css`
  border: none;
  background-color: transparent;
  color: var(--light-blue);
  position: absolute;
  inset: -80px -80px auto auto;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`