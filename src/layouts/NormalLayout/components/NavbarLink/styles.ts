import { css } from '@emotion/react'

export const navLink = (isWide: boolean) => css`
  width: ${isWide ? '160px' : '46px'};
  height: 46px;
  padding: ${isWide ? '0 20px' : 'none'};
  border-radius: 8px;
  color: #657990;
  font-size: 1.4rem;
  display: flex;
  justify-content: ${isWide ? 'flex-start' : 'center'};
  align-items: center;
  gap: 20px;
  transition: background-color 0.4s;
  &:hover {
    background-color: #edf0f3;
  }
`

export const navLinkLabel = (isWide: boolean) => css`
  white-space: nowrap;
  display: ${isWide ? 'inline-block' : 'none'};
  animation: navLinkLabel;
  animation-duration: 0.4s;
  @keyframes navLinkLabel {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
