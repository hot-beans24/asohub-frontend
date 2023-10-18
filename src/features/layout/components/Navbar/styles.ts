import { css } from '@emotion/react'

const styles = {
  navbar: (isWide: boolean) => css`
    width: ${isWide ? '220px' : '100px'};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: navber;
    transition: width 0.4s;
  `,
  navbarUl: css`
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    color: #657990;
    box-shadow: 0 0 30px rgba(180, 191, 221, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  `,
  navbarLiLast: css`
    margin-top: auto;
  `,
  toggleWidthBtn: css`
    width: 46px;
    height: 46px;
    border-radius: 8px;
    color: #657990;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.4s;
    &:hover {
      background-color: #edf0f3;
    }
  `,
  marginBottom: css`
    margin-bottom: 20px;
  `,
  userWrapper: (isWide: boolean, isLoggedIn: boolean) => css`
    margin-bottom: ${isWide ? '0' : '40px'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: opacity 0.4s;
    pointer-events: ${isLoggedIn ? 'all' : 'none'};
    &:hover {
      opacity: 0.6;
    }
  `,
  userName: (isWide: boolean) => css`
    height: 20px;
    color: var(--dark-gray);
    letter-spacing: 1px;
    white-space: nowrap;
    display: ${isWide ? 'inline-block' : 'none'};
    animation: navLinkLabel;
    animation-duration: 0.4s;
  `,
}

export default styles
