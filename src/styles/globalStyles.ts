import { css } from '@emotion/react'

import sanitize from 'sanitize.css'

const grobalStyles = css`
  ${sanitize}

  :root {
    --main-color: #144777;
    --error-color: #ff4949;
    --light-pink: #fceeed;
    --light-gray: #f5f5f5;
    --medium-gray: #D9D9D9;
    --dark-gray: #ababab;
    --light-blue: #6db8e2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', '游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
    font-size: 1.4rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
      outline: 2px solid var(--main-color);
    }
  }

  html {
    font-size: 10px;
  }

  body {
    min-width: 300px;
    min-height: 100vh;
    padding: 20px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
export default grobalStyles
