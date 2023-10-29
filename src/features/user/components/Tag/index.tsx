import { FC } from 'react'

import styles from './styles'

type TagProps = {
  text: string
}

const Tag: FC<TagProps> = ({ text }) => {
  return <span css={styles.tag}>{text}</span>
}

export default Tag
