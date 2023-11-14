import { FC } from 'react'

import PageStatus from '@@/features/common/components/PageStatus'

/* ⭐️ NotFoundページ : 完 ⭐️ */
const NotFoundPage: FC = () => {
  console.log('📘 NotFound(/*) page render')

  return <PageStatus status="notfound" />
}

export default NotFoundPage
