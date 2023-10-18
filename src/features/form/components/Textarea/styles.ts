import { css } from '@emotion/react'

import baseStyles from '@@/features/form/components/baseStyles'

const styles = {
  textarea: (isError: boolean, isReadOnly?: boolean) => css`
    ${baseStyles.formFieldBase(isError, isReadOnly)}

    height: 200px;
    padding: 20px;
    resize: none;
  `
}

export default styles
