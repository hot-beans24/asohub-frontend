import { css } from '@emotion/react'

export const container = css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: auto 1fr / auto 1fr;
  grid-template-areas:
    'header header'
    'navber main';
  row-gap: 20px;
  column-gap: 30px;
`

export const header = css`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
`

export const main = css`
  height: calc(100vh - 60px - 60px - 20px);
  grid-area: main;
  overflow-y: auto;
`

export const nav = (isWide: boolean) => css`
  width: ${isWide ? '220px' : '100px'};
  /* padding: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed;
  inset: 0; */
  grid-area: navber;
  transition: width 0.4s;
`
export const ul = css`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  color: #657990;
  box-shadow: 0 0 30px rgba(180, 191, 221, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export const button = css`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  color: #657990;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s;
  &:hover {
    background-color: #edf0f3;
  }
`
export const userWrapper = (isWide: boolean, isLogined: boolean) => css`
  margin-bottom: ${isWide ? '0' : '40px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: opacity 0.4s;
  pointer-events: ${isLogined ? 'all' : 'none'};
  &:hover {
    opacity: 0.6;
  }
`

export const userIcon = css`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`

export const userName = (isWide: boolean) => css`
  height: 20px;
  color: var(--dark-gray);
  letter-spacing: 1px;
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

export const marginBottom = css`
  margin-bottom: 30px;
`

export const marginTop = css`
  margin-top: auto;
`

export const newPostBtn = css`
  width: 240px;
  height: 52px;
  border-radius: 10px;
  background-color: var(--main-color);
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.6;
  }
`
