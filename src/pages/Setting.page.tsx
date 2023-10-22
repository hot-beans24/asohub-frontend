import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ 設定ページ : 製作中 ⭐️ */
const SettingPage: FC = () => {
  return (
    <>
      <h2>設定ページ</h2>{/* 製作中であることを表示 */}
      <PageStatus status="creating" />
    </>
  )
}

export default SettingPage
