import { css } from '@emotion/react'

const styles = {
  root: (isAuthPage: boolean) => css`
    width: 100%;
    height: 100%;
    display: ${isAuthPage ? 'block' : 'grid'};
    grid-template: auto 1fr / auto 1fr;
    grid-template-areas:
      'header header'
      'navber main';
    row-gap: 20px;
    column-gap: 30px;
  `,
}

export default styles
