import { useEffect, useState } from 'react'

export function useUser() {
  const [username, setUsername] = useState<string | undefined>()

  const [token, setToken] = useState<string | undefined>()

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token')
    const usernameStorage = localStorage.getItem('username')

    if (tokenStorage && usernameStorage) {
      setToken(token)
      setUsername(usernameStorage)
    }
  }, [username])

  return {
    username,
    setUsername,
    token,
    setToken
  }
}
