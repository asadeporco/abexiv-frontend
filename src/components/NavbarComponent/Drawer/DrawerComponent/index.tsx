import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { AvatarCustom } from 'components/AvatarCustom'
import { ButtonCustom } from 'components/ButtonCustom'
import { HomeLogo } from 'components/HomeLogo'
import { QuestionProps } from 'global/types/QuestionProps'
import { useNavigate } from 'react-router-dom'

interface DrawerProps {
  username: string | undefined
  data?: QuestionProps[]
}

export function DrawerComponent({ username }: DrawerProps) {
  const navigate = useNavigate()

  return (
    <Stack spacing={1}>
      <HomeLogo />
      <Divider />
      {username ? (
        <Box>
          <ButtonCustom sx={{ backgroundColor: 'transparent' }} variant="text">
            <Typography>{username}</Typography>
          </ButtonCustom>
          <ButtonCustom variant="text">
            <AvatarCustom size={800} />
          </ButtonCustom>
        </Box>
      ) : (
        <Container>
          <Stack spacing={4}>
            <ButtonCustom onClick={() => navigate('../login')} size="small">
              Fazer Login
            </ButtonCustom>
            <ButtonCustom
              onClick={() => navigate('../register')}
              color="info"
              size="small"
            >
              Registrar-se
            </ButtonCustom>
          </Stack>
        </Container>
      )}
    </Stack>
  )
}
