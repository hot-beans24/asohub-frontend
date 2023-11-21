import { css } from '@emotion/react'

const styles = {
  searchBarWrapper: css`
    flex: 1;
    position: relative;
    @media (max-width: 620px) {
      display: none;
    }
  `,
  searchBar: css`
    width: 100%;
    height: 42px;
    padding: 0 50px 0 20px;
    border-radius: 8px;
    border: none;
    background-color: var(--light-gray);
    color: var(--dark-gray);
  `,
  searchButton: css`
    width: 34px;
    height: 34px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 50% 10px 50% auto;
    translate: 0 -50%;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.6;
    }
  `,
}

export default styles
