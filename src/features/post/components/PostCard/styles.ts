import { css } from '@emotion/react'

const styles = {
  postCardWrapper: (isHiddenUser?: boolean) => css`
    width: 100%;
    padding: 20px;
    border: 0.6px solid #b0c7e1;
    border-radius: 8px;
    display: grid;
    grid-template: ${!isHiddenUser && 'auto'} auto 1fr auto / 1fr auto;
    grid-template-areas:
      ${!isHiddenUser && "'user user'"}
      'repositoryName repositoryName'
      'description description'
      'time linkBtn';
    gap: 20px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 0 30px rgba(180, 191, 221, 0.4);
    }
  `,
  repositoryName: css`
    width: fit-content;
    color: #525252;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    grid-area: repositoryName;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
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
}

export default styles
