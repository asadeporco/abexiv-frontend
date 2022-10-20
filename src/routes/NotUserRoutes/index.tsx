import { Dispatch, SetStateAction } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { LoginPage } from 'pages/LoginPage'
import { QuestionPage } from 'pages/QuestionPage'
import { RegisterPage } from 'pages/RegisterPage'
import { NotFoundPage } from 'components/NotFoundPage'

type NotUserRoutesProps = {
  setToken: Dispatch<SetStateAction<string | undefined>>
  setUsername: Dispatch<SetStateAction<string | undefined>>
}

export function NotUserRoutes({ setToken, setUsername }: NotUserRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:questionId" element={<QuestionPage />} />
      <Route
        path="/login"
        element={<LoginPage setToken={setToken} setUsername={setUsername} />}
      />
      <Route
        path="/register"
        element={<RegisterPage setToken={setToken} setUsername={setUsername} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
