import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from '@@/layouts/AuthLayout'
import NormalLayout from '@@/layouts/NormalLayout'

import Auth from '@@/Auth'

import Home from '@@/pages/Home'
import Login from '@@/pages/Login'
import Logout from '@@/pages/Logout'
import Singup from '@@/pages/Signup'
import Mypage from '@@/pages/Mypage'
import Setting from '@@/pages/Setting'
import NotFound from '@@/pages/NotFound'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route element={<Auth />}>
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route element={<Auth />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/signup" element={<Singup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
