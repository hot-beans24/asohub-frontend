import { css } from '@emotion/react'

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