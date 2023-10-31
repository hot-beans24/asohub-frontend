import { css } from '@emotion/react'

const styles = {
  container: css`
    width: fit-content;
    min-width: 360px;
    height: 100%;
    padding: 20px;
    grid-area: repositories;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    justify-self: center;
    overflow-y: auto;
  `,
}

export default styles
