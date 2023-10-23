import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

import FlashMessage from '@@/features/common/types/FlashMessage'

import styles from './styles'

type FlashMessagesProps = {
  flashMessages: FlashMessage[]
  deleteFlashMessage: (index: number) => void
}

const FlashMessages: FC<FlashMessagesProps> = ({ flashMessages, deleteFlashMessage }) => {
  return (
    <div css={styles.flashMessagesContainer}>
      {flashMessages.map(({ key, type, message }, index) => (
        <div key={key} css={styles.flashMessageWrapper(type)}>
          <FontAwesomeIcon icon={type === 'success' ? faCircleCheck : faCircleExclamation} />
          <p css={styles.flashMessageText}>{message}</p>
          <button type="button" aria-label="delet button" onClick={() => deleteFlashMessage(index)}>
            <FontAwesomeIcon
              icon={faXmark}
              css={{ color: type === 'success' ? 'var(--success-color)' : 'var(--error-color)' }}
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default FlashMessages
