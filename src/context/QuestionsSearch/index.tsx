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
import { getQuestionsWithParams } from 'services/gets/getQuestionsWithParams'

// QuestionsSearch - trocar pelo nome correto do contexto

type QuestionsSearchType = {
  children: ReactNode
  search: any
  page: any
  pageSize: any
}

type QuestionsSearchContextType = {
  questions?: QuestionProps[]
  setQuestions: Dispatch<SetStateAction<QuestionProps[] | undefined>>
  numberOfQuestions: number
}

const QuestionsSearchContext = createContext({} as QuestionsSearchContextType)

export function QuestionsSearchProvider({
  children,
  search,
  page,
  pageSize
}: QuestionsSearchType) {
  const [questions, setQuestions] = useState<QuestionProps[]>()
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0)

  const getQuestionsSearchFromApi = useCallback(async () => {
    const response = await getQuestionsWithParams(search, page, pageSize)

    if (response) {
      setQuestions(response?.results)

      if (response.count > 0) {
        const numOfQuestionsDividedByPageSize = Math.floor(
          response.count / pageSize
        )
        setNumberOfQuestions(numOfQuestionsDividedByPageSize)
      }
    }
  }, [search, page, pageSize])

  useEffect(() => {
    getQuestionsSearchFromApi()
  }, [getQuestionsSearchFromApi])

  return (
    <QuestionsSearchContext.Provider
      value={{ questions, setQuestions, numberOfQuestions }}
    >
      {children}
    </QuestionsSearchContext.Provider>
  )
}

export function useQuestionsSearchContext() {
  return useContext(QuestionsSearchContext)
}
