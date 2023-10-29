import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RoutingInit from '@@/routes/RoutingInit'
import AuthGuard from '@@/routes/AuthGuard'
import ROUTES from '@@/routes/routes'

import Root from '@@/features/layout/components/Root'

import Home from '@@/pages/Home.page'
import Login from '@@/pages/Login.page'
import Logout from '@@/pages/Logout.page'
import Signup from '@@/pages/Signup.page'
import Users from '@@/pages/Users.page'
import User from '@@/pages/User.page'
import Setting from '@@/pages/Setting.page'
import Search from '@@/pages/Search.page'
import LinkRepositories from '@@/pages/LinkRepositories.page'
import NotFound from '@@/pages/NotFound.page'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RoutingInit />}>
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.USER} element={<User />} />
            <Route path={ROUTES.SEARCH} element={<Search />} />
            <Route element={<AuthGuard />}>
              <Route path={ROUTES.SETTING} element={<Setting />} />
              <Route path={ROUTES.LINK_REPOSITORIES} element={<LinkRepositories />} />
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
