import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from '@@/layouts/AuthLayout'
import NormalLayout from '@@/layouts/NormalLayout'

import Home from '@@/pages/Home'
import Login from '@@/pages/Login'
import Singup from '@@/pages/Signup'
import NotFound from '@@/pages/NotFound'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
