import { css } from '@emotion/react'

const styles = {
  link: css`
    width: 100%;
    height: 100%;
    color: #657990;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
  `,
  icon: css`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  label: css`
    height: 10px;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  img: css`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
  `
}

export default styles
