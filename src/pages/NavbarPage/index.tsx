import { NavbarTemplate } from 'templates/NavbarTemplate'
import { useNavbarUser } from 'hooks/useNavbarUser'

type NavbarPageProps = {
  username: string | null
  setToken: any
  setUsername: any
  token?: string | null
}

export function NavbarPage({
  username,
  setToken,
  setUsername,
  token
}: NavbarPageProps) {
  const { categories } = useNavbarUser(token)

  return (
    <NavbarTemplate
      username={username}
      setToken={setToken}
      setUsername={setUsername}
      categories={categories}
      token={token}
    ></NavbarTemplate>
  )
}
