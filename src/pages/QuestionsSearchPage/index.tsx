import { useSearchParams } from 'react-router-dom'

import { QuestionsSearchTemplate } from 'templates/QuestionSearchTemplate'
import { QuestionsSearchProvider } from 'context/QuestionsSearch'

export function QuestionsSearchPage() {
  const [params] = useSearchParams()
  const search = params.get('search')
  const page = params.get('page')
  const pageSize = '5'

  return (
    <QuestionsSearchProvider search={search} page={page} pageSize={pageSize}>
      <QuestionsSearchTemplate />
    </QuestionsSearchProvider>
  )
}
