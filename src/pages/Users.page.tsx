import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ ユーザー一覧ページ : 製作中 ⭐️ */
const UsersPage: FC = () => {
  console.log('📘 ユーザー一覧(/users) page render')

  return (
    <>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" title="ユーザー一覧ページ" />
    </>
  )
}

export default UsersPage
