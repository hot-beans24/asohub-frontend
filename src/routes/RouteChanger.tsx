import { FC, useEffect } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

const RouteChanger: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname.endsWith('/')) {
      navigate(location.pathname.slice(0, -1), { replace: true })
    }
  }, [])

  return <Outlet />
}

export default RouteChanger
