import { useCallback, useEffect, useState } from 'react'
import { getCategories } from 'services/gets/getCategories'

export function useNavbarUser(token?: string | null) {
  const [categories, setCategories] = useState([])
  console.log(token)

  const getCategoriesDataFromApi = useCallback(async () => {
    if (token) {
      const responseGet = await getCategories(token)
      if (responseGet) {
        const results = responseGet.results
        setCategories(results)
      }
    }
  }, [])

  useEffect(() => {
    getCategoriesDataFromApi()
  }, [getCategoriesDataFromApi])

  return {
    categories,
    setCategories
  }
}
