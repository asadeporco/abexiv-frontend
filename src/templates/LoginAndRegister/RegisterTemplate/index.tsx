import { Container, Stack, Typography } from '@mui/material'

import { TextFieldHook } from 'components/TextFieldHook'
import { ContainerForm } from 'components/ContainerForm'
import { ButtonCustom } from 'components/ButtonCustom'
import { CheckHook } from 'components/CheckHook'

import { emailRules, passwordRules, checkRules, validate } from './rules'
import { submitForm } from './functions/submitForm'

import { useForm } from 'react-hook-form'

export type RegisterFormProps = {
  email: string
  password: string
  confirmPassword: string
  check: boolean
}

export function RegisterTemplate() {
  const { control, handleSubmit, getValues, watch } =
    useForm<RegisterFormProps>({
      defaultValues: {
        email: '',
        password: '',
        confirmPassword: '',
        check: false
      }
    })
  const watchPassword = watch('password')
  const watchConfirmPassword = watch('confirmPassword')

  console.log('getValues: ', getValues().password)
  return (
    <Stack justifyContent="center">
      <ContainerForm
        onSubmit={handleSubmit(submitForm)}
        spacing={4}
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h1">Registrar-se</Typography>
        <TextFieldHook
          name="email"
          type="email"
          label="Digite seu e-mail"
          control={control}
          rules={emailRules}
        />
        <TextFieldHook
          name="password"
          type="password"
          label="Digite sua senha"
          control={control}
          rules={passwordRules}
        />
        <TextFieldHook
          name="confirmPassword"
          type="password"
          label="Repita sua senha"
          control={control}
          rules={validate(watchPassword, watchConfirmPassword)}
        />
        <Container>
          <CheckHook
            name="check"
            label="Ao marcar você aceita todos os termos de uso."
            control={control}
            rules={checkRules}
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
            Já tem uma conta <a href="../login">clique aqui</a>
          </Typography>
          <Typography fontSize={15}>e faça login agora</Typography>
        </Container>
      </ContainerForm>
    </Stack>
  )
}
