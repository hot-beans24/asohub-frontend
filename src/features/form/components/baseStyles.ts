import { css } from '@emotion/react'

const baseStyles = {
  formFieldBase: (isError: boolean, isReadOnly?: boolean) => css`
    width: 300px;
    height: 52px;
    padding: 0 2rem;
    border-radius: 8px;
    border: none;
    background-color: ${isError ? 'var(--light-pink)' : isReadOnly ? 'tranparent' : 'var(--light-gray)'};
    color: var(--dark-gray);
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    &:focus-visible {
      outline: ${isError ? `1.6px solid var(--error-color)` : '1.6px solid var(--main-color)'};
      ${isReadOnly && 'outline: none;'}
    }
    ${isReadOnly && 'text-align: center;'}
    ${isReadOnly && 'cursor: default;'}
    ${isReadOnly && 'pointer-events: none;'}

    &:focus-visible + span,
    &:not(:placeholder-shown) + span {
      color: var(--main-color);
      font-size: 1.2rem;
      font-weight: 600;
      inset: -26px auto auto 4px;
    }
  `,
}

export default baseStyles
