import { FC } from 'react'

import styles from './styles'

type SettingFieldProps = {
  title: string
  field: string
}

const SettingFIeld: FC<SettingFieldProps> = ({ title, field }) => {
  return (
    <div css={styles.container}>
      <h5 css={styles.title}>{title}</h5>
      <p css={styles.field}>{field}</p>
    </div>
  )
}

export default SettingFIeld
