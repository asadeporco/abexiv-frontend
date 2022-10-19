import { LoginProps } from 'global/types/LoginProps'
import { RegisterTemplate } from 'templates/LoginAndRegister/RegisterTemplate'

export function Register({ setToken, setUsername }: LoginProps) {
  return <RegisterTemplate setToken={setToken} setUsername={setUsername} />
}
