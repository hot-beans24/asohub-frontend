import { css } from '@emotion/react'

const styles = {
  repositoryWrapper: css`
    width: 100%;
    min-width: 500px;
    max-width: 800px;
    padding: 20px;
    border: 0.6px solid var(--medium-gray);
    border-top: none;
    display: grid;
    grid-template: auto auto auto / 1fr auto;
    grid-template-areas:
      'repositoryName checkbox'
      'description checkbox'
      'time checkbox';
    row-gap: 6px;
    column-gap: 40px;
    &:first-of-type {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-top: 0.6px solid var(--medium-gray);
    }
    &:last-of-type {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 0 20px rgba(180, 191, 221, 0.4);
    }
    &:focus-visible {
      box-shadow: 0 0 20px rgba(180, 191, 221, 0.4);
      outline: none;
    }
  `,
  repositoryName: css`
    color: #525252;
    text-align: left;
    grid-area: repositoryName;
    justify-self: flex-start;
  `,
  description: css`
    color: #636363;
    text-align: left;
    grid-area: description;
    justify-self: flex-start;
  `,
  time: css`
    color: var(--dark-gray);
    font-size: 1.2rem;
    text-align: left;
    grid-area: time;
    justify-self: flex-start;
  `,
  checkboxWrapper: (isChecked: boolean) => css`
    width: 22px;
    height: 22px;
    border-radius: 6px;
    border: 1.6px solid ${isChecked ? 'var(--main-color)' : 'var(--medium-gray)'};
    grid-area: checkbox;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.2s, border 0.1s;
    &:hover {
      box-shadow: 0 0 6px rgba(180, 191, 221, 0.4);
    }
  `,
  checkboxInput: css`
    display: none;
  `,
}

export default styles
