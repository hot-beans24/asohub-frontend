import { FC } from 'react'

import PostCardsContainer from '@@/features/post/components/PostCardsContainer'
import PostCard from '@@/features/post/components/PostCard'

import styles from './Home.styles'

/* ⭐️ ホームページ : 製作中 ⭐️ */
const HomePage: FC = () => {
  const postInfo = {
    id: '1',
    username: 'username',
    repositoryName: 'asohub-frontend',
    description: 'AsoHubのフロントエンドリポジトリ',
    time: '2023/09/26 10:05',
    githubUserId: 'hot-beans24',
    githubUserIcon: 'https://github.com/hot-beans24.png',
  }
  const posts = []
  for (let i = 0; i < 90; i += 1) {
    posts[i] = postInfo
  }
  return (
    <div css={styles.container}>
      <PostCardsContainer>
        {posts.map((info, i) => (
          <PostCard
            // eslint-disable-next-line react/no-array-index-key
            key={info.id + i}
            userID={info.id}
            username={info.username}
            repositoryName={info.repositoryName}
            description={info.description}
            time={info.time}
            githubUserID={info.githubUserId}
            githubUserIcon={info.githubUserIcon}
          />
        ))}
      </PostCardsContainer>
    </div>
  )
}

export default HomePage
