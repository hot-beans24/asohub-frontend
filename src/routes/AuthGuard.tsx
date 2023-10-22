import { FC, useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const AuthGuard: FC = () => {
  const { fetchUserAuth, isLoggedIn } = useUserAuth()
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      await fetchUserAuth()
      setIsAuthChecked(true)
    })()
  })

  if (!isAuthChecked) return null

  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />
}

export default AuthGuard
