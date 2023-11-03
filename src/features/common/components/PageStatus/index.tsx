import { FC } from 'react'
import Lottie from 'lottie-react'

import lottieNotfound from '@@/assets/lottie-notfound.json'
import lottieCreating from '@@/assets/lottie-creating.json'
import lottieMaintenance from '@@/assets/lottie-maintenance.json'

import styles from './styles'

type StatusPageProps = {
  status: 'notfound' | 'creating' | 'maintenance'
  title?: string
}

const PageStatus: FC<StatusPageProps> = ({ status, title }) => {
  type StatusData = {
    json: any
    message: string
  }

  const data: Record<StatusPageProps['status'], StatusData> = {
    notfound: {
      json: lottieNotfound,
      message: 'このページは存在しません',
    },
    creating: {
      json: lottieCreating,
      message: 'このページは制作中です',
    },
    maintenance: {
      json: lottieMaintenance,
      message: 'メンテナンス中です',
    },
  }

  return (
    <div css={styles.container}>
      <div css={styles.lottieWrapper}>
        <Lottie animationData={data[status].json} style={{ width: '100%' }} />
      </div>
      {title && <h2 css={styles.title}>🔥 {title} 🔥</h2>}
      <span css={styles.message}>{data[status].message}</span>
    </div>
  )
}

export default PageStatus
