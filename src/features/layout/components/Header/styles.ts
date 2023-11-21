import { css } from '@emotion/react'

const styles = {
  header: (isAuthpage: boolean) => css`
    width: 100%;
    height: 90px;
    padding: 20px;
    background-color: ${isAuthpage ? 'transparent' : 'rgba(255, 255, 255, 0.6)'};
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: header;
    gap: 60px;
    position: fixed;
    top: 0;
    z-index: 2000;
    @media (max-width: 620px) {
      height: 60px;
      padding: 10px;
    }
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
    @media (max-width: 620px) {
      height: 36px;
      font-size: 1.2rem;
    }
  `,
  linksWrapper: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  link: css`
    color: var(--dark-gray);
    white-space: nowrap;
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
