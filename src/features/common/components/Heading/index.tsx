import { FC, Attributes } from 'react'

import styles, { Tag } from './styles'

export type HeadingProps = Attributes & {
  tag?: Tag
  children: string
}

const Heading: FC<HeadingProps> = ({ tag, children, ...props }) => {
  switch (tag) {
    case 'h1': {
      return (
        <h1 css={styles.heading('h1')} {...props}>
          {children}
        </h1>
      )
    }
    case 'h2': {
      return (
        <h2 css={styles.heading('h2')} {...props}>
          {children}
        </h2>
      )
    }
    case 'h3': {
      return (
        <h3 css={styles.heading('h3')} {...props}>
          {children}
        </h3>
      )
    }
    case 'h4': {
      return (
        <h4 css={styles.heading('h4')} {...props}>
          {children}
        </h4>
      )
    }
    case 'h5': {
      return (
        <h5 css={styles.heading('h5')} {...props}>
          {children}
        </h5>
      )
    }
    case 'h6': {
      return (
        <h6 css={styles.heading('h6')} {...props}>
          {children}
        </h6>
      )
    }
    default: {
      return (
        <h1 css={styles.heading('h1')} {...props}>
          {children}
        </h1>
      )
    }
  }
}

export default Heading
