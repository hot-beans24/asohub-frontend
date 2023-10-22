import { FC, useEffect } from 'react'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const Init: FC = () => {
  const { fetchUserAuth } = useUserAuth()

  useEffect(() => {
    const init = async () => {
      await fetchUserAuth()
    }
    init()
  }, [])

  return null
}

export default Init
