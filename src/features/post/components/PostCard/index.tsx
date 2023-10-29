import { FC } from 'react'
import { Link } from 'react-router-dom'

import makeRepositoryPath from '@@/features/github/utils/makeRepositoryPath'

import GithubLinkButton from '@@/features/github/components/GithubLinkButton'

import UserIcon from '@@/features/user/components/UserIcon'
import UserName from '@@/features/user/components/UserName'

import styles from './styles'

type PostCardProps = {
  userID: string
  username: string
  repositoryName: string
  description: string
  time: string
  githubUserID: string
  githubUserIcon: string
  isHiddenUser?: boolean
}

const PostCard: FC<PostCardProps> = ({
  userID,
  username,
  repositoryName,
  description,
  time,
  githubUserID,
  githubUserIcon,
  isHiddenUser,
}) => {
  const githubPath = makeRepositoryPath(githubUserID, repositoryName)
  return (
    <div css={styles.postCardWrapper(isHiddenUser)}>
      {!isHiddenUser && (
        <Link to={`/users/${userID}`} css={styles.userWrapper}>
          <UserIcon src={githubUserIcon} />
          <UserName username={username} />
        </Link>
      )}
      <a href={githubPath} css={styles.repositoryName} target="_blank" rel="noreferrer">
        {repositoryName}
      </a>
      <p css={styles.description}>{description}</p>
      <span css={styles.time}>{time}</span>
      <GithubLinkButton path={githubPath} label="リポジトリへ" type="repository" />
    </div>
  )
}

export default PostCard
