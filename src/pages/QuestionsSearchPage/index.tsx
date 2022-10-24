import { useSearchParams } from 'react-router-dom'
import { useQuestionsSearch } from 'hooks/useQuestionsSearch'

import { QuestionsSearchTemplate } from 'templates/QuestionSearchTemplate'

export function QuestionsSearchPage() {
  const [params] = useSearchParams()
  const search = params.get('search')
  const page = params.get('page')
  const pageSize = '5'

  const { questions, numberOfQuestions } = useQuestionsSearch(
    search,
    page,
    pageSize
  )

  return (
    <QuestionsSearchTemplate
      sentence={search}
      numberOfQuestions={numberOfQuestions}
      questions={questions}
    />
  )
}
