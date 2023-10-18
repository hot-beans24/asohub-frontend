import { css } from '@emotion/react'

const fontSizes = {
  h1: '3.0rem',
  h2: '2.4rem',
  h3: '1.8rem',
  h4: '1.6rem',
  h5: '1.4rem',
  h6: '1.2rem'
}

const marginBottoms = {
  h1: '40px',
  h2: '32px',
  h3: '24px',
  h4: '20px',
  h5: '16px',
  h6: '12px'
}

export type Tag = keyof typeof fontSizes

const styles = {
  heading: (tag: Tag) => css`
    margin-bottom: ${marginBottoms[tag!]};
    font-size: ${fontSizes[tag!]};
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2em;
  `
}

export default styles
