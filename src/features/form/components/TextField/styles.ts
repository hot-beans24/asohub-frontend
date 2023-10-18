import { css } from '@emotion/react'

import baseStyles from '@@/features/form/components/baseStyles'

const styles = {
  textField: (isError: boolean, isReadOnly?: boolean) => css`
    ${baseStyles.formFieldBase(isError, isReadOnly)}
  `,
  pwMask: css`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    color: var(--dark-gray);
    position: absolute;
    inset: 12px 12px auto auto;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  `,
}

export default styles
