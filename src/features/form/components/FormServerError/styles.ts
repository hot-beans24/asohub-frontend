import { css } from '@emotion/react'

const styles = {
  errorMessage: css`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: 0.6px solid var(--error-color);
    background-color: var(--light-pink);
    color: var(--error-color);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  `
}

export default styles
