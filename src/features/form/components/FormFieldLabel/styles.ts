import { css } from '@emotion/react'

const styles = {
  formFieldLabel: css`
    width: fit-content;
    height: fit-content;
    padding: 4px;
    color: var(--dark-gray);
    font-size: 1.4rem;
    font-weight: 500;
    position: absolute;
    inset: 12px auto auto 2rem;
    pointer-events: none;
  `
}

export default styles
