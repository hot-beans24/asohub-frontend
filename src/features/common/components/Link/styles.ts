import { css } from '@emotion/react'

const styles = {
  link: css`
    color: var(--light-blue);
    font-weight: 500;
    text-decoration: underline;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
    &:visited {
      color: #966fe8;
    }
  `,
}

export default styles
