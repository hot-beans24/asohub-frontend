import { css } from '@emotion/react'

const colors = {
  main: 'var(--main-color)',
  black: 'black',
  gray: 'var(--medium-gray)'
}

const styles = {
  formButton: (color?: keyof typeof colors, isIconRight?: boolean, isHalfSize?: boolean) => css`
    width: ${isHalfSize ? '120px' : '300px'};
    height: 52px;
    padding: 0 2rem;
    border-radius: 8px;
    background-color: ${color ? colors[color] : 'var(--main-color)'};
    color: white;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    display: flex;
    flex-direction: ${isIconRight ? 'row-reverse' : 'row'};
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
    &:focus-visible {
      outline-offset: -6px;
      outline: 2px solid white;
    }
  `
}

export default styles
