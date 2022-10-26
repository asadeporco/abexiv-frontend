import { Pagination } from '@mui/material'
import { useQuestionsSearchContext } from 'context/QuestionsSearch'
import { useSearchParams } from 'react-router-dom'

export function NavigationSearch() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { numberOfQuestions } = useQuestionsSearchContext()

  const updatedSearchParams = new URLSearchParams(searchParams.toString())
  const handleChange = (page: number) => {
    updatedSearchParams.set('page', page.toString())
    setSearchParams(updatedSearchParams)

    window.scrollTo(0, 0)
  }

  return (
    <Pagination
      onChange={(e, value) => handleChange(value)}
      count={numberOfQuestions > 0 ? numberOfQuestions : 1}
    />
  )
}
