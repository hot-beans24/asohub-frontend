import { FC } from 'react'

import styles from './styles'

type AttentionTextProps = {
  text: string
}

const AttentionText: FC<AttentionTextProps> = ({ text }) => {
  return <p css={styles.attentionText}>🚨 {text} 🚨</p>
}

export default AttentionText
