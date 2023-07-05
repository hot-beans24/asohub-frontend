import { css } from '@emotion/react'

export const logo = css`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.06em;
  position: fixed;
  inset: 20px auto auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.6;
  }
`
