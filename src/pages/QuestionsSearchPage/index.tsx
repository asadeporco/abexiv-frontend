import { useSearchParams } from 'react-router-dom'
import { useQuestionsSearch } from 'hooks/useQuestionsSearch'

import { QuestionsSearchTemplate } from 'templates/QuestionSearchTemplate'

export function QuestionsSearchPage() {
  const [params] = useSearchParams()
  const search = params.get('search')
  const page = params.get('page') ?? '1'
  const pageSize = '5'

  const { questions } = useQuestionsSearch(search, page, pageSize)

  return <QuestionsSearchTemplate questions={questions} />
}
