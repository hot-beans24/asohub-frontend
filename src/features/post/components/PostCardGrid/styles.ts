import { css } from '@emotion/react'

const styles = {
  postCardGrid: css`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  `
}

export default styles
