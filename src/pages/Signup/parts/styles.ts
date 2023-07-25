import { css } from '@emotion/react'

export const modalBox = css`
  padding: 4em;
  border-radius: 26px;
  background-color: white;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:focus {
    border: none;
    outline: none;
  }
`

export const message = css`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`