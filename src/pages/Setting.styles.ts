import { css } from '@emotion/react'

const styles = {
  container: css`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    overflow-y: auto;
  `,
  center: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
}

export default styles
