import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const PostCardsContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.postCardsContainer}>{children}</div>
}

export default PostCardsContainer
