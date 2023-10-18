import { css } from '@emotion/react'

const styles = {
  link: css`
    color: var(--light-blue);
    font-weight: 500;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
}

export default styles
