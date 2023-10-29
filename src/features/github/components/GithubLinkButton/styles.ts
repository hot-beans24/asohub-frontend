import { css } from '@emotion/react'

const styles = {
  linkBtn: (type: 'repository' | 'profile') => css`
    width: 34px;
    height: 34px;
    padding: 8px 16px;
    border-radius: 6px;
    border: 0.6px solid #b0c7e1;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    grid-area: linkBtn;
    overflow: hidden;
    transition: width 0.4s, background-color 0.4s;
    span {
      white-space: nowrap;
      display: none;
    }
    &:hover {
      width: ${type === 'repository' ? '140px' : '154px'};
      border: 0.6px solid transparent;
      background-color: black;
      color: white;
      transition: width 0.2s, background-color 0s;
      span {
        display: block;
      }
    }
  `,
}

export default styles
