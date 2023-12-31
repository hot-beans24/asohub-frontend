import { css } from '@emotion/react'

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  `,
  title: css`
    font-size: 1.6rem;
    font-weight: 600;
  `,
  message: css`
    font-size: 1.4rem;
  `,
  lottieWrapper: css`
    max-width: 500px;
    max-height: 500px;
  `,
}

export default styles
