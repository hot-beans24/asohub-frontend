import { FC } from 'react'
import { Img } from 'react-image'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles'

type UserIconProps = {
  src: string
}

const UserIcon: FC<UserIconProps> = ({ src }) => {
  return (
    <div css={styles.iconImgWrapper}>
      <Img
        css={styles.iconImg}
        src={src}
        loader={<FontAwesomeIcon icon={faSpinner} style={{ fontSize: 24, color: '#d9d9d9' }} spinPulse />}
        alt="user icon"
      />
    </div>
  )
}

export default UserIcon
