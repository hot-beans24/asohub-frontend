import { FC } from 'react'
import { css } from '@emotion/react'

const NotFoundPage: FC = () => {
  return (
    <div css={container}>
      <h1>404</h1>
      <h3>Not Found</h3>
    </div>
  )
}

export default NotFoundPage

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

