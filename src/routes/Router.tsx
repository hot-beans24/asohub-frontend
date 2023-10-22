import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Root from '@@/features/layout/components/Root'

import Home from '@@/pages/Home.page'
import Login from '@@/pages/Login.page'
import Logout from '@@/pages/Logout.page'
import Signup from '@@/pages/Signup.page'
import User from '@@/pages/User.page'
import Setting from '@@/pages/Setting.page'
import NewRepository from '@@/pages/NewRepository.page'
import NotFound from '@@/pages/NotFound.page'

import RouteChanger from '@@/routes/RouteChanger'
import AuthGuard from '@@/routes/AuthGuard'
import ROUTES from './routes'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouteChanger />}>
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN}element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
            <Route path={ROUTES.USER} element={<User />} />
            <Route element={<AuthGuard />}>
              <Route path={ROUTES.SETTING} element={<Setting />} />
              <Route path={ROUTES.NEW_REPOSITORY} element={<NewRepository />} />
              <Route path={ROUTES.LOGOUT} element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
