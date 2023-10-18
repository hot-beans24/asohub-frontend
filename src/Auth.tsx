import { FC } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import useUserAuth from './features/auth/hooks/useUserAuth'

const Auth: FC = () => {
  const { isLoggedIn } = useUserAuth()
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />
}

export default Auth
