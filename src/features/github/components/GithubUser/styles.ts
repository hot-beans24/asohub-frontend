import { css } from '@emotion/react'

import animations from '@@/styles/animations'

const styles = {
  githubUser: css`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 0.6px solid var(--medium-gray);
    display: grid;
    grid-template: 1fr 1fr / auto 1fr;
    grid-template-areas:
      'icon name'
      'icon id';
    column-gap: 20px;
  `,
  githubUserIconWrapper: css`
    width: 80px;
    height: 80px;
    grid-area: icon;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    @media (max-width: 620px) {
      width: 60px;
      height: 60px;
    }
  `,
  githubUserIcon: css`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    animation-name: ${animations.fadeIn};
    animation-duration: 0.4s;
  `,
  githubUserID: css`
    color: var(--dark-gray);
    grid-area: id;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    animation-name: ${animations.fadeIn};
    animation-duration: 0.4s;
    @media (max-width: 620px) {
      font-size: 1.2rem;
    }
  `,
  githubUsername: css`
    font-size: 1.6rem;
    font-weight: 700;
    grid-area: name;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    animation-name: ${animations.fadeIn};
    animation-duration: 0.4s;
    @media (max-width: 620px) {
      font-size: 1.4rem;
    }
  `,
}

export default styles
