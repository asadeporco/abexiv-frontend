import { NavbarTemplate } from 'templates/NavbarTemplate'
import { NavbarUserProvider } from 'context/NavbarUser'

type NavbarPageProps = {
  token: string | null
}

export function NavbarPage({ token }: NavbarPageProps) {
  return (
    <NavbarUserProvider token={token}>
      <NavbarTemplate token={token} />
    </NavbarUserProvider>
  )
}
