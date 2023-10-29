import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ 新規リポジトリ登録ページ : 製作中 ⭐️ */
const NewRepositoryPage: FC = () => {
  return (
    <>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" title="新規リポジトリ登録ページ" />
    </>
  )
}

export default NewRepositoryPage
