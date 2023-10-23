import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ 新規リポジトリ登録ページ : 製作中 ⭐️ */
const NewRepositoryPage: FC = () => {
  return (
    <>
      <h2>新規リポジトリ登録ページ</h2>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" />
    </>
  )
}

export default NewRepositoryPage
