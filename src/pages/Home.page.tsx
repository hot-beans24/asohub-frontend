import { FC } from 'react'

import ContentsLoading from '@@/features/common/components/ContentsLoading'

import PostCardsContainer from '@@/features/post/components/PostCardsContainer'
import PostCard from '@@/features/post/components/PostCard'

import useHomePosts from '@@/features/post/hooks/useHomrPosts'

import styles from './Home.styles'

/* ⭐️ ホームページ : 製作中 ⭐️ */
const HomePage: FC = () => {
  const { posts, isLoading } = useHomePosts()

  return (
    <div css={styles.container}>
      {isLoading && <ContentsLoading />}
      {!isLoading && (
        <PostCardsContainer>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              userID={post.userID}
              username={post.asohubUsername}
              repositoryName={post.name}
              description={post.description}
              time={post.repositoryCreatedAt}
              githubUserID={post.githubUserID}
              githubUserIcon={post.githubUserIcon}
            />
          ))}
        </PostCardsContainer>
      )}
    </div>
  )
}

export default HomePage
