import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ ユーザーページ : 製作中 ⭐️ */
const UserPage: FC = () => {
  return (
    <>
      <h2>ユーザーページ</h2>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" />
    </>
  )
}

export default UserPage
