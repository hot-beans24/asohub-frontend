import { css } from '@emotion/react'

const styles = {
  postCardsContainer: css`
    min-width: 360px;
    padding: 0 20px;
    display: grid;
    grid-area: posts;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-auto-rows: max-content;
    gap: 20px;
    overflow-y: auto;
    overflow-x: visible;
  `,
}

export default styles
