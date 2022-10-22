import { Pagination } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

type NavigationSearchProps = {
  count: number
  sentence: string | null
}

export function NavigationSearch({ count }: NavigationSearchProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const updatedSearchParams = new URLSearchParams(searchParams.toString())
  const handleChange = (page: number) => {
    updatedSearchParams.set('page', page.toString())
    setSearchParams(updatedSearchParams)

    window.scrollTo(0, 0)
  }

  return (
    <Pagination onChange={(e, value) => handleChange(value)} count={count} />
  )
}
