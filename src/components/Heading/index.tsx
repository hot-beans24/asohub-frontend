import { FC, Attributes } from 'react'

import { heading } from './styles'

export type HeadingProps = Attributes & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: string
}

const Heading: FC<HeadingProps> = ({ tag, children, ...props }) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 css={heading('h1')} {...props}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 css={heading('h2')} {...props}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 css={heading('h3')} {...props}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 css={heading('h4')} {...props}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 css={heading('h5')} {...props}>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 css={heading('h6')} {...props}>
          {children}
        </h6>
      )
    default:
      return (
        <h1 css={heading('h1')} {...props}>
          {children}
        </h1>
      )
  }
}

export default Heading
