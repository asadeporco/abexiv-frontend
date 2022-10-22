import { useCallback, useEffect, useState } from 'react'
import { QuestionProps } from 'global/types/QuestionProps'

import { getQuestionsWithParams } from 'services/gets/getQuestionsWithParams'

export function useQuestionsSearch(search: any, page: any, pageSize: any) {
  const [questions, setQuestions] = useState<QuestionProps[]>([])
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0)

  const getQuestionsSearchFromApi = useCallback(async () => {
    const response = await getQuestionsWithParams(search, page, pageSize)

    if (response) {
      setQuestions(response?.results)

      if (response.count > 0) {
        const numOfQuestionsDividedByPageSize =
          Math.floor(response.count / pageSize) + 1
        setNumberOfQuestions(numOfQuestionsDividedByPageSize)
      }
    }
  }, [search, page, pageSize])

  useEffect(() => {
    getQuestionsSearchFromApi()
  }, [getQuestionsSearchFromApi])

  return { questions, setQuestions, numberOfQuestions }
}
