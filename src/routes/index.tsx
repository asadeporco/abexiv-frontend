import { useState } from 'react'

import { NavbarNotUser } from 'templates/NavbarTemplate/NavbarNotUser'
import { NavbarUser } from 'templates/NavbarTemplate/NavbarUser'

import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Question } from 'pages/Question'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function UserRoutes() {
  const [user] = useState(false)

  return (
    <BrowserRouter>
      {user ? <NavbarUser /> : <NavbarNotUser />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  )
}
