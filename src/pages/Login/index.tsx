import { LoginProps } from 'global/types/LoginProps'
import { LoginTemplate } from 'templates/LoginAndRegister/LoginTemplate'

export function Login({ setToken, setUsername }: LoginProps) {
  return <LoginTemplate setToken={setToken} setUsername={setUsername} />
}
