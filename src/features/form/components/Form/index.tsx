import { FC, FormHTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles'

type FormProps = PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>

const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form css={styles.formWrapper} {...props}>
      {children}
    </form>
  )
}

export default Form
