import { useState } from 'react'

import { NavbarUser } from 'templates/NavbarTemplate/NavbarUser'

import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Question } from 'pages/Question'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { green } from 'global/data/Green'

console.log(green, 'color: white; background-color: green;')
console.log(
  '%cPrecisa de ajuda Amigão?!',
  'color: green; font-family: sans-serif; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;'
)

export function UserRoutes() {
  const [user] = useState(false)

  return (
    <BrowserRouter>
      <NavbarUser user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  )
}
