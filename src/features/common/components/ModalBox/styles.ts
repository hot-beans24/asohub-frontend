import { css } from '@emotion/react'

const styles = {
  modalBox: (isNoGap?: boolean) => css`
    padding: 50px;
    border-radius: 16px;
    background-color: white;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${isNoGap ? 'none' : '30px'};
  `,
  message: css`
    font-size: 1.6rem;
    font-weight: 600;
  `
}

export default styles
