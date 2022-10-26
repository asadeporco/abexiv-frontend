import { AnswerProps } from 'global/types/AnswerProps'
import { QuestionProps } from 'global/types/QuestionProps'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'
import { getAnswersFromQuestion } from 'services/gets/getAnswersFromQuestion'
import { getQuestionDetail } from 'services/gets/getQuestionDetail'
import { getSimilarQuestion } from 'services/gets/getSimilarQuestions'

type QuestionType = {
  children: ReactNode
  id: any
}

type QuestionContextType = {
  question: QuestionProps | undefined
  setQuestion: Dispatch<SetStateAction<QuestionProps | undefined>>
  answers: AnswerProps[] | undefined
  similarQuestions: QuestionProps[] | undefined
  setSimilarQuestions: Dispatch<SetStateAction<QuestionProps[] | undefined>>
  setAnswers: Dispatch<SetStateAction<AnswerProps[] | undefined>>
  id: any
}

const QuestionContext = createContext({} as QuestionContextType)

export function QuestionProvider({ children, id }: QuestionType) {
  const [question, setQuestion] = useState<QuestionProps>()
  const [answers, setAnswers] = useState<AnswerProps[]>()
  const [similarQuestions, setSimilarQuestions] = useState<QuestionProps[]>()

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
  }, [id])

  useEffect(() => {
    getQuestionDataFromApi()
  }, [getQuestionDataFromApi])

  return (
    <QuestionContext.Provider
      value={{
        id,
        question,
        setQuestion,
        answers,
        similarQuestions,
        setSimilarQuestions,
        setAnswers
      }}
    >
      {children}
    </QuestionContext.Provider>
  )
}

export function useQuestionContext() {
  return useContext(QuestionContext)
}
