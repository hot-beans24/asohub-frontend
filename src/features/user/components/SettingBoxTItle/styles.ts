import { css } from '@emotion/react'

const styles = {
  container: css`
    width: 100%;
    display: grid;
    grid-template: auto auto / auto 1fr;
    grid-template-areas:
      "title statusMessage"
      "divider divider"
    ;
    row-gap: 8px;
    column-gap: 10px;
  `,
  title: css`
    width: fit-content;
    font-weight: 600;
    grid-area: title;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  `,
  statusMessage: css`
    width: fit-content;
    height: 26px;
    padding: 0 10px;
    border-radius: 6px;
    background-color: var(--light-gray);
    color: var(--dark-gray);
    font-size: 1.2rem;
    grid-area: statusMessage;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    gap: 6px;
  `,
  divider: css`
    width: 100%;
    height: 1px;
    background-color: var(--medium-gray);
    grid-area: divider;
    display: block;
  `
}

export default styles
