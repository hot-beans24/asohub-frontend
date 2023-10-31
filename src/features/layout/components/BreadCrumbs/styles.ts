import { css } from '@emotion/react'

const styles = {
  container: css`
    height: 42px;
    padding: 0 20px;
    /* margin-right: auto; */
    border-radius: 8px;
    background-color: var(--light-gray);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
  `,
  link: css`
    color: var(--dark-gray);
    white-space: nowrap;
    transition: opacity 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.6;
    }
    animation: fadein 1s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  arrow: css`
    color: var(--medium-gray);
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-child {
      display: none;
    }
    animation: fadein 1s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
}

export default styles
