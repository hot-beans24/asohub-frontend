import { FC, PropsWithChildren } from 'react'

import styles from './styles'

const GithubRepositoriesContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.container}>{children}</div>
}

export default GithubRepositoriesContainer
