import { useSearchParams } from 'react-router-dom'

import { QuestionTemplate } from 'templates/QuestionTemplate'
import { QuestionProvider } from 'context/Question'

export function QuestionPage() {
  const [params] = useSearchParams()
  const questionId = params.get('q')

  return (
    <QuestionProvider id={questionId}>
      <QuestionTemplate />
    </QuestionProvider>
  )
}
