import { useCallback, useEffect, useState } from 'react'

import { getQuestions } from 'services/gets/getQuestions'

export function useNavbar() {
  const [questions, setQuestions] = useState([])

  const getQuestionDataFromApi = useCallback(() => {
    getQuestions().then((data) => {
      setQuestions(data.results)
    })
  }, [])

  useEffect(() => {
    getQuestionDataFromApi()
  }, [getQuestionDataFromApi])

  return {
    questions,
    setQuestions
  }
}
