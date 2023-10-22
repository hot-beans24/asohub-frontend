import { FC } from 'react'
import { Img } from 'react-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'

type GithubUserProps = {
  githubUserIcon: string
  githubUserID: string
  githubUserName: string
}

const GithubUser: FC<GithubUserProps> = ({ githubUserIcon, githubUserID, githubUserName }) => {
  return (
    <div css={styles.githubUser}>
      <div css={styles.githubUserIconWrapper}>
        <Img
          css={styles.githubUserIcon}
          src={githubUserIcon}
          loader={<FontAwesomeIcon icon={faSpinner} style={{ fontSize: 24, color: '#d9d9d9' }} spin />}
          alt="github user icon"
        />
      </div>
      <span css={styles.githubUsername}>{githubUserName}</span>
      <span css={styles.githubUserID}>{githubUserID}</span>
    </div>
  )
}

export default GithubUser
