import { QuestionTemplate } from 'templates/QuestionTemplate'

export function Question({ userLogged }: any) {
  return <QuestionTemplate userLogged={userLogged} />
}
