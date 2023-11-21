import { css } from '@emotion/react'

const styles = {
  logo: css`
    color: var(--main-color);
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 0.06em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
    @media (max-width: 620px) {
      font-size: 1.4rem;
      img {
        width: 20px;
        height: 20px;
      }
    }
  `,
}

export default styles
