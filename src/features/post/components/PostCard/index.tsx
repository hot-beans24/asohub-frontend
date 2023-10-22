import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import makeRepositoryPath from '@@/features/github/utils/makeRepositoryPath'

import UserIcon from '@@/features/user/components/UserIcon'
import UserName from '@@/features/user/components/UserName'

import styles from './styles'

type PostCardProps = {
  username: string
  repositoryName: string
  time: string
  githubUserID: string
  githubUserIcon: string
}

const PostCard: FC<PostCardProps> = ({ username, repositoryName, time, githubUserID, githubUserIcon }) => {
  const navigate = useNavigate()

  const handleUserClick = () => {
    navigate(`/${username}`)
  }

  return (
    <a
      href={makeRepositoryPath(githubUserID, repositoryName)}
      css={styles.postCardWrapper}
      target="_blank"
      rel="noreferrer"
    >
      <button type="button" css={styles.userWrapper} onClick={handleUserClick}>
        <UserIcon src={githubUserIcon} />
        <UserName username={username} />
      </button>
      <p css={styles.repositoryName}>{repositoryName}</p>
      <span css={styles.time}>{time}</span>
    </a>
  )
}

export default PostCard
