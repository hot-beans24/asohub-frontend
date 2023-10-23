import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import styles from './styles'

const FlashMessages: FC = () => {
  const { flashMessages, deleteFlashMessage } = useFlashMessages()

  if (!flashMessages) {
    return null
  }

  return (
    <div css={styles.flashMessagesContainer}>
      {flashMessages.map(({ key, type, message }, index) => (
        <div key={key} css={styles.flashMessageWrapper(type)}>
          <FontAwesomeIcon
            icon={type === 'success' ? faCircleCheck : faCircleExclamation}
          />
          <p css={styles.flashMessageText}>{message}</p>
          <button type="button" aria-label="delet button" onClick={() => deleteFlashMessage(index)}>
            <FontAwesomeIcon icon={faXmark} css={{ color: type === 'success' ? 'var(--success-color)' : 'var(--error-color)' }} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default FlashMessages