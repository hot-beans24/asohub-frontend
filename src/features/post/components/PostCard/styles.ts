import { css } from '@emotion/react'

const styles = {
  postCardWrapper: css`
    padding: 20px;
    border: 0.6px solid #b0c7e1;
    border-radius: 8px;
    display: grid;
    grid-template: auto auto auto / 1fr auto;
    grid-template-areas:
      'user user'
      'message message'
      'time time';
    gap: 30px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 0 30px rgba(180, 191, 221, 0.25);
    }
  `,
  userWrapper: css`
    width: fit-content;
    grid-area: user;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
  repositoryName: css`
    color: black;
    font-size: 1.4rem;
    letter-spacing: 0.1em;
    grid-area: message;
  `,
  time: css`
    color: var(--dark-gray);
    grid-area: time;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
}

export default styles
