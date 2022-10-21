import { useCallback, useEffect, useState } from 'react'

import { getQuestionDetail } from 'services/gets/getQuestionDetail'
import { QuestionProps } from 'global/types/QuestionProps'
import { getAnswersFromQuestion } from 'services/gets/getAnswersFromQuestion'

import { AnswerProps } from 'global/types/AnswerProps'
import { getSimilarQuestion } from 'services/gets/getSimilarQuestions'

export function useQuestion(id: any) {
  const [question, setQuestion] = useState<QuestionProps>()
  const [answers, setAnswers] = useState<AnswerProps[]>([])
  const [similarQuestions, setSimilarQuestions] = useState<QuestionProps[]>([])

  const getQuestionDataFromApi = useCallback(async () => {
    const responseGetQuestionDetail = await getQuestionDetail(id)
    if (responseGetQuestionDetail) {
      setQuestion(responseGetQuestionDetail)
    }

    const responseGetAnswersFromQuestion = await getAnswersFromQuestion(id)
    if (responseGetAnswersFromQuestion) {
      setAnswers(responseGetAnswersFromQuestion.results)
    }

    const responseGetSimilarQuestion = await getSimilarQuestion()
    if (responseGetSimilarQuestion) {
      setSimilarQuestions(responseGetSimilarQuestion.results)
    }
  }, [])

  useEffect(() => {
    getQuestionDataFromApi()
  }, [getQuestionDataFromApi])

  return {
    question,
    setQuestion,
    answers,
    similarQuestions,
    setSimilarQuestions,
    setAnswers
  }
}
