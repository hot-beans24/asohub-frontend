import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './styles'

const PostCardsContainer: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.6 }}
        css={styles.postCardsContainer}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PostCardsContainer
