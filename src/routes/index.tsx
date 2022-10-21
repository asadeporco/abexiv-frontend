import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NotFoundPage } from 'components/NotFoundPage'

import { NavbarPage } from 'pages/NavbarPage'
import { HomePage } from 'pages/HomePage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { QuestionPage } from 'pages/QuestionPage'
import { QuestionsSearchPage } from 'pages/QuestionsSearchPage'

import { green } from 'global/data/Green'
import { useUser } from 'hooks/useUser'

console.log(green, 'color: white; background-color: green;')
console.log(
  '%cPrecisa de ajuda Amigão?!',
  'color: green; font-family: sans-serif; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;'
)

export function UserRoutes() {
  const { token, setToken, username, setUsername } = useUser()

  return (
    <BrowserRouter>
      <NavbarPage
        setToken={setToken}
        setUsername={setUsername}
        username={username}
        token={token}
      />
      {token ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/question/:questionId" element={<QuestionPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          <Route
            path="/login"
            element={
              <LoginPage setToken={setToken} setUsername={setUsername} />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage setToken={setToken} setUsername={setUsername} />
            }
          />
          <Route path="/questions" element={<QuestionsSearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}
