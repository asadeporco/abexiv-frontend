import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavbarUser } from 'templates/NavbarTemplate/NavbarUser'
import { NotFoundPage } from 'components/NotFoundPage'

import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Question } from 'pages/Question'

import { green } from 'global/data/Green'
import { useNavbar } from 'hooks/useNavbar'
import { useUser } from 'hooks/useUser'

console.log(green, 'color: white; background-color: green;')
console.log(
  '%cPrecisa de ajuda Amigão?!',
  'color: green; font-family: sans-serif; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;'
)

export function UserRoutes() {
  const { token, setToken, username, setUsername } = useUser()
  const { questions } = useNavbar()

  return (
    <BrowserRouter>
      <NavbarUser
        data={questions}
        username={username}
        setToken={setToken}
        setUsername={setUsername}
      />
      {token ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question/:questionId" element={<Question />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question/:questionId" element={<Question />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUsername={setUsername} />}
          />
          <Route
            path="/register"
            element={<Register setToken={setToken} setUsername={setUsername} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}
