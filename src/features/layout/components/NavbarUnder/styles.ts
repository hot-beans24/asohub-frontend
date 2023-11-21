import { css } from '@emotion/react'

const styles = {
  navbar: css`
    width: 100%;
    height: 80px;
    padding: 0 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9000;
    @media (min-width: 621px) {
      display: none;
    }
  `,
  navbarUl: css`
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 0.6px solid var(--medium-gray);
    background-color: white;
    color: #657990;
    box-shadow: 0 0 8px rgba(180, 191, 221, 0.1);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  `
}

export default styles
