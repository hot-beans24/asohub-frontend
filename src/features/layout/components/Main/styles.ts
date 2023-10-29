import { css } from '@emotion/react'

const styles = {
  main: (isAuthPage: boolean) => css`
    height: ${isAuthPage ? 'auth' : 'calc(100vh - 60px - 60px - 20px)'};
    padding-top: ${isAuthPage ? '140px' : '0'};
    padding-bottom: ${isAuthPage ? '200px' : '0'};
    grid-area: main;
  `,
}

export default styles
