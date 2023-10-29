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
    githubUserIcon: 'https://avatars.githubusercontent.com/u/106505475?v=4',
  }
  const posts = []
  for (let i = 0; i < 40; i += 1) {
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
