import { UserProvider } from 'context/UserContext'
import { UserTemplate } from 'templates/UserTemplate'

export function UserPage() {
  return (
    <UserProvider>
      <UserTemplate />
    </UserProvider>
  )
}
