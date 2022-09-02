import { NavbarTemplate } from 'templates/NavbarTemplate'

import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Question } from 'pages/Question'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function UserRoutes() {
  return (
    <BrowserRouter>
      <NavbarTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  )
}
