import { FC } from 'react'
// import { useParams } from 'react-router-dom'

import PageStatus from '@@/features/common/components/PageStatus'

// import GithubLinkButton from '@@/features/github/components/GithubLinkButton'

// import PostCardsContainer from '@@/features/post/components/PostCardsContainer'
// import PostCard from '@@/features/post/components/PostCard'

// import Tag from '@@/features/user/components/Tag'

// import useUserData from '@@/features/user/hooks/useUserData'

// import UserIcon from '@@/features/user/components/UserIcon'

// import department from '@@/features/user/data/department'
// import grade from '@@/features/user/data/grade'

// import styles from './User.styles'

/* ⭐️ ユーザーページ : 製作中 ⭐️ */
const UserPage: FC = () => {
  // const params = useParams()
  // const { userData } = useUserData(params.userID || '')

  // if (!userData) return null

  return (
    <>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" title="ユーザーページ" />
    </>
  )

  // return (
  //   <div css={styles.container}>
  //     <div css={styles.profile}>
  //       <UserIcon src={userData.githubUserIcon} />
  //       <span>{userData.name}</span>
  //       <GithubLinkButton
  //         path={`https://github.com/${userData.githubUserName}`}
  //         label="プロフィールへ"
  //         type="profile"
  //       />
  //       <Tag text={department[userData.departmentID]} />
  //       <Tag text={grade[userData.grade]} />
  //     </div>
  //     <PostCardsContainer>
  //       {userData.posts &&
  //         userData.posts.map((post) => (
  //           <PostCard
  //             key={post.repositoryName}
  //             userID={userData.id}
  //             username={userData.name}
  //             repositoryName={post.repositoryName}
  //             description={post.description}
  //             time={post.time}
  //             githubUserID={post.githubUserName}
  //             githubUserIcon={post.githubUserIcon}
  //             isHiddenUser
  //           />
  //         ))}
  //     </PostCardsContainer>
  //   </div>
  // )
}

export default UserPage
