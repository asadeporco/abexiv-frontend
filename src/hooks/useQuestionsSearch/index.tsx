import { useCallback, useEffect, useState } from 'react'
import { QuestionProps } from 'global/types/QuestionProps'

import { getQuestionsWithParams } from 'services/gets/getQuestionsWithParams'

export function useQuestionsSearch(search: any, page: any, pageSize: any) {
  const [questions, setQuestions] = useState<QuestionProps[]>([])

  const getQuestionsSearchFromApi = useCallback(() => {
    getQuestionsWithParams(search, page, pageSize).then((response) => {
      setQuestions(response?.results)
    })
  }, [search, page, pageSize])

  useEffect(() => {
    getQuestionsSearchFromApi()
  }, [getQuestionsSearchFromApi])

  return { questions }
}
