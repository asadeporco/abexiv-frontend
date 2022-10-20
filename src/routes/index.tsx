import { BrowserRouter } from 'react-router-dom'

import { NavbarUser } from 'templates/NavbarTemplate/NavbarUser'

import { green } from 'global/data/Green'
import { useNavbar } from 'hooks/useNavbar'
import { useUser } from 'hooks/useUser'
import { NotUserRoutes } from './NotUserRoutes'

console.log(green, 'color: white; background-color: green;')
console.log(
  '%cPrecisa de ajuda Amigão?!',
  'color: green; font-family: sans-serif; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;'
)

export function UserRoutes() {
  const { token, setToken, username, setUsername } = useUser()
  const { questions } = useNavbar()

  return (
    <BrowserRouter>
      <NavbarUser
        data={questions}
        username={username}
        setToken={setToken}
        setUsername={setUsername}
      />
      {token ? (
        <UserRoutes />
      ) : (
        <NotUserRoutes setToken={setToken} setUsername={setUsername} />
      )}
    </BrowserRouter>
  )
}
