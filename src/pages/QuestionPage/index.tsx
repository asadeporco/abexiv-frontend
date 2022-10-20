import { useParams } from 'react-router-dom'
import { useQuestion } from 'hooks/useQuestion'

import { QuestionTemplate } from 'templates/QuestionTemplate'

export function QuestionPage() {
  const { questionId } = useParams()
  const { question, answers } = useQuestion(questionId)

  return <QuestionTemplate question={question} answers={answers} />
}
