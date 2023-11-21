import { css } from '@emotion/react'

const styles = {
  modalBox: (isNoGap?: boolean) => css`
    padding: 50px;
    border-radius: 16px;
    /* background-color: white; */
    border: none;
    outline: none;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.04); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${isNoGap ? 'none' : '30px'};
    position: relative;
    z-index: 3001;
  `,
  message: css`
    font-size: 1.6rem;
    font-weight: 600;
  `,
}

export default styles
