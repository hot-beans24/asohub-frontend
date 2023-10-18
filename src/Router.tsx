import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Root from '@@/features/layout/components/Root'
import AuthGuard from '@@/features/auth/components/AuthGurad'

import Home from '@@/pages/Home'
import Login from '@@/pages/Login'
import Logout from '@@/pages/Logout'
import Singup from '@@/pages/Signup'
// import Mypage from '@@/pages/Mypage'
// import Setting from '@@/pages/Setting'

import PageStatus from '@@/features/common/components/PageStatus'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route element={<AuthGuard />}>
            <Route path="/mypage" element={<PageStatus status="creating" />} />
            <Route path="/setting" element={<PageStatus status="creating" />} />
            <Route path="/new-repository" element={<PageStatus status="creating" />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<PageStatus status="notfound" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
