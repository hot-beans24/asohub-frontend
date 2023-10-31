import { css } from '@emotion/react'

const styles = {
  container: css`
    width: fit-content;
    min-width: 540px;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template: auto 1fr / 1fr;
    grid-template-areas:
      'header'
      'repositories';
    gap: 20px;
  `,
  header: css`
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    justify-self: center;
  `,
  text: css`
    padding: 0 20px;
    color: var(--dark-gray);
  `,
  sendButton: css`
    height: 42px;
    padding: 0 20px;
    border-radius: 8px;
    background-color: var(--main-color);
    color: white;
    grid-area: SendButton;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `,
}

export default styles
