import { css } from '@emotion/react'

const styles = {
  header: (isAuthPage: boolean) => css`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: header;
    position: ${isAuthPage ? 'fixed' : 'stataic'};
  `,
  newRepositoryBtn: css`
    padding: 14px 20px;
    border-radius: 10px;
    background-color: var(--main-color);
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
}

export default styles
