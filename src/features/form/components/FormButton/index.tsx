/* eslint-disable react/button-has-type */
import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: IconDefinition
    isIconRight?: boolean
    isHalfSize?: boolean
    color?: 'main' | 'black' | 'gray'
    isLoading?: boolean
  }
>

const Button: FC<ButtonProps> = ({ children, icon, color, isIconRight, isHalfSize, isLoading, ...props }) => {
  if (isLoading) {
    return (
      <button css={styles.formButton(color, isIconRight, isHalfSize)} {...props}>
        <FontAwesomeIcon icon={faSpinner} spin />
      </button>
    )
  }

  return (
    <button css={styles.formButton(color, isIconRight, isHalfSize)} {...props}>
      {icon && <FontAwesomeIcon icon={icon} size="lg" />}
      {children}
    </button>
  )
}

export default Button
