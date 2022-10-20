import { LoginProps } from 'global/types/LoginProps'
import { LoginTemplate } from 'templates/LoginTemplate'

export function LoginPage({ setToken, setUsername }: LoginProps) {
  return <LoginTemplate setToken={setToken} setUsername={setUsername} />
}
