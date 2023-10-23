import { FC, useEffect } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

const RoutingInit: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { deleteNotCrossPageMessages } = useFlashMessages()

  useEffect(() => {
    if (location.pathname.endsWith('/')) {
      navigate(location.pathname.slice(0, -1), { replace: true })
    }
  }, [])

  useEffect(() => {
    deleteNotCrossPageMessages()
  }, [location.pathname])

  return <Outlet />
}

export default RoutingInit
