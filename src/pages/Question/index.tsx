import { useParams } from 'react-router-dom'
import { QuestionTemplate } from 'templates/QuestionTemplate'

type RouteParams = {
  questionId: string
}

export function Question({ userLogged }: any) {
  const params = useParams<RouteParams>()

  return (
    <QuestionTemplate questionId={params.questionId} userLogged={userLogged} />
  )
}
