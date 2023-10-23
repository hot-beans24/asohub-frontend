import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import makeRepositoryPath from '@@/features/github/utils/makeRepositoryPath'

import UserIcon from '@@/features/user/components/UserIcon'
import UserName from '@@/features/user/components/UserName'

import styles from './styles'

type PostCardProps = {
  username: string
  repositoryName: string
  description: string
  time: string
  githubUserID: string
  githubUserIcon: string
}

const PostCard: FC<PostCardProps> = ({ username, repositoryName, description, time, githubUserID, githubUserIcon }) => {
  return (
    <div css={styles.postCardWrapper}>
      <Link to={`/${username}`} css={styles.userWrapper}>
        <UserIcon src={githubUserIcon} />
        <UserName username={username} />
      </Link>
      <h3 css={styles.repositoryName}>{repositoryName}</h3>
      <p css={styles.description}>{description}</p>
      <span css={styles.time}>{time}</span>
      <a href={makeRepositoryPath(githubUserID, repositoryName)} css={styles.linkBtn} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 18 }} />
        <span>リポジトリへ</span>
      </a>
    </div>
  )
}

export default PostCard
