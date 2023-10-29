import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ リポジトリ連携ページ : 製作中 ⭐️ */
const NewRepositoryPage: FC = () => {
  return (
    <>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" title="リポジトリ連携ページ" />
    </>
  )
}

export default NewRepositoryPage
