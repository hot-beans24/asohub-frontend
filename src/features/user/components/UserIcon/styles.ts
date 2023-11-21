import { css } from '@emotion/react'

import animations from '@@/styles/animations'

const styles = {
  iconImgWrapper: css`
    width: 36px;
    height: 36px;
    border-radius: 100%;
    border: 0.6px solid var(--light-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 620px) {
      width: 30px;
      height: 30px;
    }
  `,
  iconImg: css`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    animation-name: ${animations.fadeIn};
    animation-duration: 1s;
  `,
}

export default styles
