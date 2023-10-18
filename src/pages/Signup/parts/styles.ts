import { css, keyframes } from '@emotion/react'

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

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const githubUser = css`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(180, 191, 221, 0.25);
  display: grid;
  grid-template: 1fr 1fr / auto 1fr;
  grid-template-areas:
    'icon name'
    'icon id';
  column-gap: 20px;
`

export const githubUserIconWrapper = css`
  width: 80px;
  height: 80px;
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const githubUserIcon = css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
  animation-name: ${animation};
  animation-duration: 0.4s;
`

export const githubUserID = css`
  color: var(--dark-gray);
  grid-area: id;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation-name: ${animation};
  animation-duration: 0.4s;
`

export const githubUserName = css`
  font-size: 1.6rem;
  font-weight: 700;
  grid-area: name;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation-name: ${animation};
  animation-duration: 0.4s;
`

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
