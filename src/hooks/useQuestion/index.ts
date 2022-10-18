import { useCallback, useEffect, useState } from 'react'

import { getQuestionDetail } from 'services/gets/getQuestionDetail'
import { QuestionProps } from 'global/types/QuestionProps'
import { getAnswersFromQuestion } from 'services/gets/getAnswersFromQuestion'

import { AnswerProps } from 'global/types/AnswerProps'

export function useQuestion(id: number) {
  const [question, setQuestion] = useState<QuestionProps>()
  const [answers, setAnswers] = useState<AnswerProps[]>([])

  const getQuestionDataFromApi = useCallback(() => {
    getQuestionDetail(id).then((data) => {
      setQuestion(data)
    })
    getAnswersFromQuestion(id).then((data) => {
      setAnswers(data)
    })
  }, [id])

  useEffect(() => {
    getQuestionDataFromApi()
  }, [getQuestionDataFromApi])

  return {
    question,
    setQuestion,
    answers,
    setAnswers
  }
}
