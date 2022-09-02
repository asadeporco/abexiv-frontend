import { Container, Stack, Typography } from '@mui/material'

import { TextFieldHook } from 'components/TextFieldHook'
import { ContainerForm } from 'components/ContainerForm'
import { ButtonCustom } from 'components/ButtonCustom'

import { useForm } from 'react-hook-form'

import { submitForm } from './functions/submitForm'
import { emailRules, passwordRules } from './rules'

export type LoginTemplateForm = {}

export function LoginTemplate() {
  const { control, handleSubmit } = useForm<LoginTemplateForm>()

  return (
    <Stack justifyContent="center">
      <ContainerForm
        onSubmit={handleSubmit(submitForm)}
        spacing={4}
        justifyContent="center"
        textAlign={'center'}
      >
        <Typography variant="h1">Login</Typography>
        <TextFieldHook
          name="email"
          label="E-mail"
          rules={emailRules}
          control={control}
        />
        <TextFieldHook
          name="password"
          type="password"
          label="Senha"
          rules={passwordRules}
          control={control}
        />
        <Container>
          <ButtonCustom color="info" type="submit">
            Fazer Login
          </ButtonCustom>
        </Container>
        <Container maxWidth={'xl'}>
          <Typography fontSize={15}>
            Não tem uma conta <a href="google.com">clique aqui</a>
          </Typography>
          <Typography fontSize={15}>e registre-se agora</Typography>
        </Container>
      </ContainerForm>
    </Stack>
  )
}
