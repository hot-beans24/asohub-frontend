import { css } from '@emotion/react'

const styles = {
  main: (isWide: boolean, isAuthPage: boolean) => css`
    width: 100%;
    padding-top: 90px;
    padding-left: ${isAuthPage ? '0' : isWide ? '240px' : '120px'};
    padding-bottom: 10px;
    grid-area: main;
    transition: padding-left 0.4s;
    @media (max-width: 620px) {
      padding-top: 60px;
      padding-left: 0;
      padding-bottom: 100px;
    }
  `,
}

export default styles
