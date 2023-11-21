import { css } from '@emotion/react'

const styles = {
  username: css`
    color: var(--dark-gray);
    letter-spacing: 1px;
    white-space: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 620px) {
      font-size: 1.2rem;
    }
  `,
}

export default styles
