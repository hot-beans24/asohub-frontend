import { FC } from 'react'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import FlashMessage from '@@/features/common/components/FlashMessage'

import styles from './styles'

const FlashMessages: FC = () => {
  const { flashMessages } = useFlashMessages()

  if (!flashMessages) return null

  return (
    <div css={styles.flashMessagesContainer}>
      {flashMessages.map((fMessage) => (
        <FlashMessage key={fMessage.key} flashMessage={fMessage} />
      ))}
    </div>
  )
}

export default FlashMessages
