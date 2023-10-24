import { css } from '@emotion/react'

const styles = {
  postCardWrapper: css`
    width: 100%;
    padding: 20px;
    border: 0.6px solid #b0c7e1;
    border-radius: 8px;
    display: grid;
    grid-template: auto auto auto / 1fr auto;
    grid-template-areas:
      'user user'
      'repositoryName repositoryName'
      'description description'
      'time linkBtn';
    gap: 20px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 0 30px rgba(180, 191, 221, 0.25);
    }
  `,
  repositoryName: css`
    color: #525252;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    grid-area: repositoryName;
  `,
  description: css`
    color: #636363;
    grid-area: description;
  `,
  time: css`
    color: var(--dark-gray);
    grid-area: time;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  userWrapper: css`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-area: user;
    gap: 8px;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
  linkBtn: css`
    width: 34px;
    height: 34px;
    padding: 8px 10px;
    border-radius: 6px;
    border: 0.6px solid #b0c7e1;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    grid-area: linkBtn;
    overflow: hidden;
    transition: width 0.2s, background-color 0s;
    span {
      white-space: nowrap;
      display: none;
    }
    &:hover {
      border: 0.6px solid transparent;
      background-color: black;
      color: white;
      width: 140px;
      transition: width 0.2s, background-color 0.4s;
      span {
        display: block;
      }
    }
  `,
}

export default styles
