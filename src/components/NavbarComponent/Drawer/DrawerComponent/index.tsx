import { Container, Divider, Stack, Typography } from '@mui/material'
import { AvatarCustom } from 'components/AvatarCustom'
import { ButtonCustom } from 'components/ButtonCustom'
import { HomeLogo } from 'components/HomeLogo'
import { QuestionProps } from 'global/types/QuestionProps'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleMenuOpen } from 'templates/NavbarTemplate/NavbarUser/functions/handleMenuOpen'

interface DrawerProps {
  username: string | undefined
  data?: QuestionProps[]
  menuId: string
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}

export function DrawerComponent({
  username,
  menuId,
  setAnchorEl
}: DrawerProps) {
  const navigate = useNavigate()

  return (
    <Stack spacing={1}>
      <HomeLogo />
      <Divider />
      {username ? (
        <ButtonCustom
          sx={{ backgroundColor: 'transparent' }}
          variant="text"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={(e) => handleMenuOpen({ e, setAnchorEl })}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <Typography>{username}</Typography>
            <AvatarCustom size={50} />
          </Stack>
        </ButtonCustom>
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
