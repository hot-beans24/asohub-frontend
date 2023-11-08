import { FC, PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import styles from './styles'

type SettingBoxTitleProps = {
  statusMessage?: string
  icon?: IconDefinition
}

const SettingBoxTitle: FC<PropsWithChildren<SettingBoxTitleProps>> = ({ children, statusMessage, icon }) => {
  return (
    <div css={styles.container}>
      <h3 css={styles.title}>{children}</h3>
      {statusMessage && (
        <span css={styles.statusMessage}>
          {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: 14 }} />}
          {statusMessage}
        </span>
      )}
      <div css={styles.divider} />
    </div>
  )
}

export default SettingBoxTitle
