import { LoginProps } from 'global/types/LoginProps'
import { RegisterTemplate } from 'templates/RegisterTemplate'

export function RegisterPage({ setToken, setUsername }: LoginProps) {
  return <RegisterTemplate setToken={setToken} setUsername={setUsername} />
}
