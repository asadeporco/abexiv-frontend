import { useForm } from 'react-hook-form'
import { Container, Stack, Typography } from '@mui/material'

import { TextFieldHook } from 'components/TextFieldHook'
import { ContainerForm } from 'components/ContainerForm'
import { ButtonCustom } from 'components/ButtonCustom'
import { CheckHook } from 'components/CheckHook'
import { AnchorCustom } from 'components/AnchorCustom'

import { defaultValues } from './functions/defaultValues'
import { resolver } from './functions/resolver'
import { submitForm } from './functions/submitForm'
import { useNavigate } from 'react-router-dom'

export type RegisterFormProps = {
  email: string
  password: string
  confirmPassword: string
  check: boolean
}

export function RegisterTemplate() {
  const { control, handleSubmit } = useForm<RegisterFormProps>({
    defaultValues,
    resolver
  })
  const navigate = useNavigate()

  return (
    <Stack justifyContent="center">
      <ContainerForm
        onSubmit={handleSubmit(submitForm)}
        spacing={4}
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h1">Registrar-se</Typography>

        <Stack direction="row" spacing={3}>
          <TextFieldHook
            control={control}
            name="first_name"
            label="Primeiro nome"
          />
          <TextFieldHook control={control} name="last_name" label="Sobrenome" />
        </Stack>

        <TextFieldHook
          name="username"
          label="Digite seu nome de usuário"
          control={control}
        />
        <TextFieldHook
          name="email"
          label="Digite seu email"
          control={control}
        />
        <TextFieldHook
          name="password"
          type="password"
          label="Digite sua senha"
          control={control}
        />
        <TextFieldHook
          name="confirmPassword"
          type="password"
          label="Repita sua senha"
          control={control}
        />
        <Container>
          <CheckHook
            name="check"
            label="Ao marcar você aceita todos os termos de uso."
            control={control}
            color="info"
          />
        </Container>
        <Container>
          <ButtonCustom color="info" type="submit">
            Registrar-se
          </ButtonCustom>
        </Container>
        <Container maxWidth={'xl'}>
          <Typography fontSize={15}>
            Já tem uma conta?{' '}
            <AnchorCustom handleClick={() => navigate('../login')}>
              clique aqui
            </AnchorCustom>
          </Typography>
          <Typography fontSize={15}>e faça login agora</Typography>
        </Container>
      </ContainerForm>
    </Stack>
  )
}
