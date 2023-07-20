import { FC, ButtonHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { button } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  type: typeof HTMLButtonElement.prototype.type
  icon?: IconDefinition
  isIconRight?: boolean
  isNotPrimary?: boolean
  isHalfSize?: boolean
}

const Button: FC<ButtonProps> = ({ children, type, icon, isIconRight, isNotPrimary, isHalfSize, ...props }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button css={button(isIconRight, isNotPrimary, isHalfSize)} type={type} {...props}>
      {icon && <FontAwesomeIcon icon={icon} size="lg" />}
      {children}
    </button>
  )
}

export default Button
