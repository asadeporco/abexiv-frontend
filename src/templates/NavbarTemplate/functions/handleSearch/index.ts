import { getQuestionsWithParams } from 'services/gets/getQuestionsWithParams'

export async function handleSearch(setSearchData: any, search: string) {
  if (search !== '') {
    const response = await getQuestionsWithParams(search, 1, 5)

    if (response) {
      setSearchData(response.results)
    } else {
      console.log('error')
    }
  }
}
