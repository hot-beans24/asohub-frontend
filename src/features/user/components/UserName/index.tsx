import { FC } from 'react'

import styles from './styles'

type UserNameProps = {
  username: string
}

const UserName: FC<UserNameProps> = ({ username }) => {
  return <span css={styles.username}>{username}</span>
}

export default UserName
