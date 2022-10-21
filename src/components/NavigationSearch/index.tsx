import { Pagination } from '@mui/material'

type NavigationSearchProps = {
  count: number
}

export function NavigationSearch({ count }: NavigationSearchProps) {
  return <Pagination count={count} />
}
