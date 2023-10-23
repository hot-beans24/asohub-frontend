import { FC, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import FlashMessageType from "@@/features/common/types/FlashMessage"

import styles from './styles'

type FlashMessageProps = {
  flashMessage: FlashMessageType
}

const FlashMessage: FC<FlashMessageProps> = ({ flashMessage: { key, type, message } }) => {
  const { deleteFlashMessage } = useFlashMessages()

  useEffect(() => {
    const timer = setTimeout(() => {
      deleteFlashMessage(key)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div css={styles.flashMessageWrapper(type)}>
      <FontAwesomeIcon icon={type === 'success' ? faCircleCheck : faCircleExclamation} />
      <p css={styles.flashMessageText}>{message}</p>
      <button type="button" aria-label="delet button" onClick={() => deleteFlashMessage(key)}>
        <FontAwesomeIcon
          icon={faXmark}
          css={{ color: type === 'success' ? 'var(--success-color)' : 'var(--error-color)' }}
        />
      </button>
    </div>
  )
}

export default FlashMessage