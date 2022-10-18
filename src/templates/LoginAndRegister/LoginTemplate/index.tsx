import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Container, Stack, Typography } from '@mui/material'

import { TextFieldHook } from 'components/TextFieldHook'
import { ContainerForm } from 'components/ContainerForm'
import { ButtonCustom } from 'components/ButtonCustom'
import { CheckHook } from 'components/CheckHook'
import { AnchorCustom } from 'components/AnchorCustom'

import { submitForm } from './functions/submitForm'
import { defaultValues } from './functions/defaultValues'

export function LoginTemplate() {
  const { control, handleSubmit } = useForm({ defaultValues })
  const navigate = useNavigate()

  return (
    <Stack justifyContent="center">
      <ContainerForm
        onSubmit={handleSubmit(submitForm)}
        spacing={4}
        justifyContent="center"
        textAlign={'center'}
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
        />
        <Container>
          <CheckHook
            name="check"
            label="Mantenha-me conectado"
            control={control}
            color="info"
          />
        </Container>
        <Container>
          <ButtonCustom color="info" type="submit">
            Fazer Login
          </ButtonCustom>
        </Container>
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
