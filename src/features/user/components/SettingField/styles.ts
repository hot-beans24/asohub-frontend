import { css } from '@emotion/react'

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  `,
  title: css`
    width: fit-content;
    height: 26px;
    padding: 0 10px;
    border-radius: 6px;
    background-color: var(--light-gray);
    font-size: 1.2rem;
    font-weight: 500;
    grid-area: statusMessage;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    gap: 6px;
  `,
  field: css`
    color: var(--dark-gray);
    @media (max-width: 620px) {
      font-size: 1.2rem;
    }
  `,
}

export default styles
