import { FC } from 'react'
import Lottie from 'lottie-react'

import { css } from '@emotion/react'

import notfound from './notfound.json'

const NotFoundPage: FC = () => {
  return (
    <div css={container}>
      <Lottie animationData={notfound} />
      <span css={message}>このページは存在しません</span>
    </div>
  )
}

export default NotFoundPage

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const message = css`
  font-size: 1.6rem;
`
