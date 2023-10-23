import { css } from '@emotion/react'

import sanitize from 'sanitize.css'

const grobalStyles = css`
  ${sanitize}

  :root {
    --main-color: #144777;
    --success-color: #4caf50;
    --error-color: #ed6f78;
    --light-pink: #fceeed;
    --light-gray: #f5f5f5;
    --medium-gray: #d9d9d9;
    --dark-gray: #ababab;
    --light-blue: #6db8e2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
    font-size: 1.4rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus-visible {
      outline: 2px solid var(--main-color);
    }
  }

  html {
    height: 100%;
    font-size: 10px;
  }

  body {
    height: 100%;
    min-width: 300px;
    min-height: 100vh;
    padding: 30px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
export default grobalStyles
