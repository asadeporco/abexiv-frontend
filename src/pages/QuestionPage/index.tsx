import { useSearchParams } from 'react-router-dom'
import { useQuestion } from 'hooks/useQuestion'

import { QuestionTemplate } from 'templates/QuestionTemplate'

export function QuestionPage() {
  const [params] = useSearchParams()
  const questionId = params.get('q')
  console.log(questionId)

  const { question, answers } = useQuestion(questionId)

  return <QuestionTemplate question={question} answers={answers} />
}
