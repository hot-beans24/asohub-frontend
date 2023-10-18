import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const PostCardGrid: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.postCardGrid}>{children}</div>
}

export default PostCardGrid
