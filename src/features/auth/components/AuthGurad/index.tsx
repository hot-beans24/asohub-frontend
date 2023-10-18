import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const AuthGuard: FC = () => {
  const { isLoggedIn } = useUserAuth()
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />
}

export default AuthGuard
