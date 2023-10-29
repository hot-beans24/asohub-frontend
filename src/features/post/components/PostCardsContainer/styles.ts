import { css } from '@emotion/react'

const styles = {
  postCardsContainer: css`
    display: grid;
    grid-area: posts;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-auto-rows: max-content;
    gap: 20px;
    overflow-y: auto;
  `,
}

export default styles
