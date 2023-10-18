import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

import styles from './styles'

type ModalBoxProps = PropsWithChildren<{
  message: string
  isNoGap?: boolean
}>

const ModalBox: FC<ModalBoxProps> = ({ children, message, isNoGap }) => {
  return (
    <motion.div
      css={styles.modalBox(isNoGap)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0, 0.6, 0.2, 1.0]
      }}
    >
      <p css={styles.message}>{message}</p>
      {children}
    </motion.div>
  )
}

export default ModalBox
