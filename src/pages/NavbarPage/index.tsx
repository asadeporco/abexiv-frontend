import { NavbarTemplate } from 'templates/NavbarTemplate'
import { useNavbarUser } from 'hooks/useNavbarUser'

type NavbarPageProps = {
  token: string | null
}

export function NavbarPage({ token }: NavbarPageProps) {
  const { categories } = useNavbarUser(token)

  return <NavbarTemplate categories={categories} token={token} />
}
