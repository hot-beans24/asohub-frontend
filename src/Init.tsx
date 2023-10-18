import { FC, useEffect } from 'react'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const Init: FC = () => {
  const { fetchUserAuth } = useUserAuth()

  useEffect(() => {
    console.log('🔥 初期実行 🔥')
    fetchUserAuth()
  }, [])

  return null
}

export default Init
