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

export const text = css`
  margin-top: 40px;
  color: var(--dark-gray);
  font-size: 1.4rem;
  text-align: center;
`

export const errorMessage = css`
  padding: 16px;
  border-radius: 8px;
  border: 0.6px solid var(--error-color);
  background-color: var(--light-pink);
  color: var(--error-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`