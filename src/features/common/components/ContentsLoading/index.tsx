import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'

const ContentsLoading: FC = () => {
  return (
    <div css={styles.container}>
      <FontAwesomeIcon icon={faSpinner} style={{ fontSize: 30, color: 'var(--medium-gray)' }} spin />
      <span css={styles.text}>Loading...</span>
    </div>
  )
}

export default ContentsLoading
