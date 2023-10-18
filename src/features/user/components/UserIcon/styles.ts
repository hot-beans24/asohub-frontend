import { css } from '@emotion/react'

import animations from '@@/styles/animations'

const styles = {
  iconImgWrapper: css`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  iconImg: css`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
    object-position: center;
    animation-name: ${animations.fadeIn};
    animation-duration: 1s;
  `
}

export default styles
