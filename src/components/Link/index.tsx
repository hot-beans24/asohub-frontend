import { FC, LinkHTMLAttributes } from 'react'
import { Link as RLDLink, LinkProps as RLDLinkProps } from 'react-router-dom'

import { link } from './style'

type LinkProps = LinkHTMLAttributes<HTMLLinkElement> &
  RLDLinkProps & {
    children: string
  }
const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <RLDLink css={link} {...props}>
      {children}
    </RLDLink>
  )
}

export default Link
