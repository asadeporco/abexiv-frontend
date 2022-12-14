import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState
} from 'react'

type UserPageType = {
  children: ReactNode
}

type UserPageContextType = {
  userQuestions: any
  setUserQuestions: any
}

const UserPageContext = createContext({} as UserPageContextType)

export function UserPageProvider({ children }: UserPageType) {
  const [userQuestions, setUserQuestions] = useState<any[]>([])

  function getUserQuestions() {}

  useEffect(() => {
    getUserQuestions()
  }, [])

  return (
    <UserPageContext.Provider value={{ userQuestions, setUserQuestions }}>
      {children}
    </UserPageContext.Provider>
  )
}

export function useUserPageContext() {
  return useContext(UserPageContext)
}
