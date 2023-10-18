import { css } from '@emotion/react'

import baseStyles from '@@/features/form/components/baseStyles'

const styles = {
  selectField: (isError: boolean, isReadOnly?: boolean) => css`
    ${baseStyles.formFieldBase(isError, isReadOnly)}

    cursor: pointer;
    span {
      font-size: 5rem;
    }
  `,
  opt: css`
    cursor: pointer;
  `,
  arrowIcon: (isReadOnly?: boolean) => css`
    border-radius: 100%;
    color: var(--dark-gray);
    position: absolute;
    inset: 16px 24px auto auto;
    cursor: pointer;
    pointer-events: none;
    ${isReadOnly && 'display: none;'}
  `
}

export default styles
