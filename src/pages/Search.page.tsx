import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ 検索ページ : 製作中 ⭐️ */
const SearchPage: FC = () => {
  return (
    <>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" title="検索ページ" />
    </>
  )
}

export default SearchPage
