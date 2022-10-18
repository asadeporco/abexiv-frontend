import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import { NavbarUser } from 'templates/NavbarTemplate/NavbarUser'

import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Question } from 'pages/Question'

import { green } from 'global/data/Green'
import { useNavbar } from 'hooks/useNavbar'

console.log(green, 'color: white; background-color: green;')
console.log(
  '%cPrecisa de ajuda Amigão?!',
  'color: green; font-family: sans-serif; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;'
)

export function UserRoutes() {
  const [user] = useState(false)
  const { questions } = useNavbar()

  return (
    <BrowserRouter>
      <NavbarUser data={questions} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question/:questionId" element={<Question />} />
      </Routes>
    </BrowserRouter>
  )
}
