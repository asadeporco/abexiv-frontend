import { Route, Routes } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { QuestionPage } from 'pages/QuestionPage'
import { NotFoundPage } from 'components/NotFoundPage'

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:questionId" element={<QuestionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
