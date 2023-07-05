import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@@/pages/Home'
import Login from '@@/pages/Login'
import Singup from '@@/pages/Signup'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
