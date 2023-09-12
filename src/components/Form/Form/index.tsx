import { FC, FormHTMLAttributes, PropsWithChildren } from 'react'

import { form } from './styles'

type FormProps = FormHTMLAttributes<HTMLFormElement>

const Form: FC<PropsWithChildren<FormProps>> = ({ children, ...props }) => {
  return (
    <form css={form} {...props}>
      {children}
    </form>
  )
}

export default Form
