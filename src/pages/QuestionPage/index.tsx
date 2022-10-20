import { useParams } from 'react-router-dom'
import { QuestionTemplate } from 'templates/QuestionTemplate'

type RouteParams = {
  questionId: string
}

export function QuestionPage({ userLogged }: any) {
  const params = useParams<RouteParams>()

  return (
    <QuestionTemplate questionId={params.questionId} userLogged={userLogged} />
  )
}
