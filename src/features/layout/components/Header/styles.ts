import { css } from '@emotion/react'

const styles = {
  header: (isAuthPage: boolean) => css`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: header;
    gap: 60px;
    position: ${isAuthPage ? 'fixed' : 'stataic'};
  `,
  newRepositoryBtn: css`
    height: 42px;
    padding: 0 20px;
    border-radius: 8px;
    background-color: var(--main-color);
    color: white;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
  linksWrapper: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  link: css`
    color: var(--dark-gray);
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
  divider: css`
    color: var(--dark-gray);
  `,
}

export default styles
