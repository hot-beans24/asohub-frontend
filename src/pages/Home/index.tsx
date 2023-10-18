import { FC } from 'react'

import PostCardsContainer from '@@/features/post/components/PostCardsContainer'
import PostCard from '@@/features/post/components/PostCard'

const HomePage: FC = () => {
  const postInfo = {
    id: 'ID',
    username: 'username',
    repositoryName: 'asohub-frontend',
    message: 'アイウエオかきくけこ',
    time: '2023/09/26 10:05',
    githubUserId: 'hot-beans24',
    githubUserIcon: 'https://avatars.githubusercontent.com/u/106505475?v=4',
  }
  const posts = []
  for (let i = 0; i < 40; i += 1) {
    posts[i] = postInfo
  }
  return (
    <>
      <h2>ホーム画面</h2>
      <PostCardsContainer>
        {posts.map((info, i) => (
          <PostCard
            // eslint-disable-next-line react/no-array-index-key
            key={info.id + i}
            username={info.username}
            repositoryName={info.repositoryName}
            time={info.time}
            githubUserID={info.githubUserId}
            githubUserIcon={info.githubUserIcon}
          />
        ))}
      </PostCardsContainer>
    </>
  )
}

export default HomePage
