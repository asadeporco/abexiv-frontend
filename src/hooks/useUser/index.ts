import { useState } from 'react'

export function useUser() {
  const [username, setUsername] = useState(() => {
    const username = localStorage.getItem('username')
    return username
  })

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token')
    return token
  })

  return {
    username,
    setUsername,
    token,
    setToken
  }
}
