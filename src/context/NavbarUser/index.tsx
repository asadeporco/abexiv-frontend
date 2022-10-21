import { CategoryProps } from 'global/types/CategoryProps'
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
import { getCategories } from 'services/gets/getCategories'

// NavbarUser - trocar pelo nome correto do contexto

type NavbarUserType = {
  children: ReactNode
  token: string | null
}

type NavbarUserContextType = {
  categories: CategoryProps[]
  setCategories: Dispatch<SetStateAction<never[]>>
}

const NavbarUserContext = createContext({} as NavbarUserContextType)

export function NavbarUserProvider({ children, token }: NavbarUserType) {
  const [categories, setCategories] = useState([])

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

  return (
    <NavbarUserContext.Provider value={{ categories, setCategories }}>
      {children}
    </NavbarUserContext.Provider>
  )
}

export function useNavbarUserContext() {
  return useContext(NavbarUserContext)
}
