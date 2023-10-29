import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ 設定ページ : 製作中 ⭐️ */
const SettingPage: FC = () => {
  return (
    <>
      {/* 製作中であることを表示 */}
      <PageStatus status="creating" title="設定ページ" />
    </>
  )
}

export default SettingPage
