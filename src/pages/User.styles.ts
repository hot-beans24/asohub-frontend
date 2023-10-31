import { css } from '@emotion/react'

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: auto auto 1fr / 1fr;
    grid-template-areas:
      'profile'
      'posts';
    gap: 16px;
  `,
  profile: css`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    grid-area: profile;
    gap: 20px;
  `,
  userID: css`
    color: black;
  `,
}

export default styles
