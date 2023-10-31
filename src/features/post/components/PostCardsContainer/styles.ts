import { css } from '@emotion/react'

import animations from '@@/styles/animations'

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
    animation-name: ${animations.fadeIn};
    animation-duration: 0.4s;
  `,
}

export default styles
