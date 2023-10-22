import { FC, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const Init: FC = () => {
  const { fetchUserAuth } = useUserAuth()
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      await fetchUserAuth()
    })()
    setIsAuthChecked(true)
  }, [])

  return isAuthChecked ? <Outlet /> : null
}

export default Init
