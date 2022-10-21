import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

// User - trocar pelo nome correto do contexto

type UserType = {
  children: ReactNode
}

type UserContextType = {
  token: string | null
  setToken: Dispatch<SetStateAction<string | null>>
  username: string | null
  setUsername: Dispatch<SetStateAction<string | null>>
}

const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserType) {
  const [username, setUsername] = useState(() => {
    const username = localStorage.getItem('username')
    return username
  })

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token')
    return token
  })

  return (
    <UserContext.Provider value={{ token, setToken, username, setUsername }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
