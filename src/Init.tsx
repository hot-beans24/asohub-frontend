import { FC, useEffect } from 'react'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const Init: FC = () => {
  const { fetchUserAuth } = useUserAuth()

  useEffect(() => {
    fetchUserAuth()
    console.log('init')
  }
  , [])

  return null
}

export default Init