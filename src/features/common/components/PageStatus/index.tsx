import { FC } from 'react'
import Lottie from 'lottie-react'

import styles from './styles'

import notfoundLottieJson from './notfound.json'
import creatingLottieJson from './creating.json'
import maintenanceLottieJson from './maintenance.json'

type StatusPageProps = {
  status: 'notfound' | 'creating' | 'maintenance'
}

const PageStatus: FC<StatusPageProps> = ({ status }) => {
  const data = {
    notfound: {
      json: notfoundLottieJson,
      message: 'このページは存在しません',
    },
    creating: {
      json: creatingLottieJson,
      message: 'このページは作成中です',
    },
    maintenance: {
      json: maintenanceLottieJson,
      message: 'このページはメンテナンス中です',
    },
  }

  return (
    <div css={styles.container}>
      <div css={styles.lottieWrapper}>
        <Lottie animationData={data[status].json} style={{ width: '100%' }} />
      </div>
      <span css={styles.message}>{data[status].message}</span>
    </div>
  )
}

export default PageStatus
