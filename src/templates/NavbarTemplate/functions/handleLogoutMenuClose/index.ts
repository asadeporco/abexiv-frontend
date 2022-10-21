import { Dispatch, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'

export async function handleLogoutMenuClose(
  navigate: NavigateFunction,
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>,
  setUsername: Dispatch<SetStateAction<string | null>>,
  setToken: Dispatch<SetStateAction<string | null>>
) {
  setAnchorEl(null)

  localStorage.removeItem('token')
  localStorage.removeItem('username')

  setUsername(null)
  setToken(null)

  navigate('/')
}
