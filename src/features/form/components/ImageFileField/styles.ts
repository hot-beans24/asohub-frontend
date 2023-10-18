import { css } from '@emotion/react'

import animations from '@@/styles/animations'
import baseStyles from '@@/features/form/components/baseStyles'

const styles = {
  imageFileField: (isError: boolean, isReadOnly?: boolean) => css`
    ${baseStyles.formFieldBase(isError, isReadOnly)}

    height: 140px;
    border-radius: 100%;
    visibility: hidden;
  `,
  inputLabel: (isImageExist: boolean) => css`
    width: 140px;
    height: 140px;
    margin: 0 auto;
    border-radius: 100%;
    border: ${isImageExist ? '0.6px solid var(--medium-gray)' : 'none'};
    background-color: var(--light-gray);
    position: absolute;
    inset: 0;
    cursor: pointer;
  `,
  isNotImage: css`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    color: var(--medium-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 1;
  `,
  imagePreview: css`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
    z-index: 2;
    animation-name: ${animations.fadeIn};
    animation-duration: 0.2s;
    animation-timing-function: ease-in;
    animation-fill-mode: both;
  `,
  icon: css`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 0.6px solid var(--medium-gray);
    background-color: white;
    color: var(--dark-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: auto 74px 8px auto;
    z-index: 10;
    cursor: pointer;
    pointer-events: none;
  `,
}

export default styles
