import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Container, Stack, Typography } from '@mui/material'

import { TextFieldHook } from 'components/TextFieldHook'
import { ContainerForm } from 'components/ContainerForm'
import { ButtonCustom } from 'components/ButtonCustom'
import { CheckHook } from 'components/CheckHook'
import { AnchorCustom } from 'components/AnchorCustom'

import { onSubmit } from './functions/onSubmit'
import { defaultValues } from './functions/defaultValues'
import { useUserContext } from 'context/UserContext'

export function LoginTemplate() {
  const { setToken, setUsername } = useUserContext()

  const { control, handleSubmit, setError } = useForm({ defaultValues })
  const navigate = useNavigate()

  return (
    <Stack justifyContent="center">
      <ContainerForm
        onSubmit={handleSubmit((data) =>
          onSubmit(data, navigate, setToken, setUsername, setError)
        )}
        spacing={4}
      >
        <Typography variant="h1">Fazer login</Typography>
        <TextFieldHook
          name="username"
          label="Nome de usuário"
          control={control}
        />
        <TextFieldHook
          name="password"
          type="password"
          label="Senha"
          control={control}
          FormHelperTextProps={{ sx: { textAlign: 'center' } }}
        />
        <Stack>
          <Container>
            <CheckHook
              disabled
              defaultChecked
              name="stayConnected"
              label="Mantenha-me conectado"
              color="info"
              control={control}
            />
          </Container>

          <Container>
            <ButtonCustom color="info" type="submit">
              Fazer Login
            </ButtonCustom>
          </Container>
        </Stack>
        <Container maxWidth={'xl'}>
          <Typography fontSize={15}>
            Não tem uma conta?{' '}
            <AnchorCustom handleClick={() => navigate('../register')}>
              clique aqui
            </AnchorCustom>
          </Typography>
          <Typography fontSize={15}>e registre-se agora</Typography>
        </Container>
      </ContainerForm>
    </Stack>
  )
}
