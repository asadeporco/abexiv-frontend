import { Box, Divider, Drawer, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { AvatarCustom } from 'components/AvatarCustom'
import { ButtonCustom } from 'components/ButtonCustom'
import { HomeLogo } from 'components/HomeLogo'
import { SearchInput } from 'components/SearchInput'

import { useNavigate } from 'react-router-dom'
interface DrawerProps {
  user: boolean
}

function DrawerComponent({ user }: DrawerProps) {
  const navigate = useNavigate()

  return (
    <Stack spacing={1}>
      <HomeLogo />
      <Divider />
      {user ? (
        <Box>
          <ButtonCustom sx={{ backgroundColor: 'transparent' }} variant="text">
            <Typography>pedro69</Typography>
          </ButtonCustom>
          <ButtonCustom variant="text" aria-haspopup="true">
            <AvatarCustom
              size={50}
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3MjBlNTVjLWQyMjItNDc2OS05MGI4LWFlYzIyNjJjMDk4OFwvZGR2dG16MS1jYWRmYWE3Zi02ZGE5LTRiNTktYTBmZS02ZWQ1NzQyYWYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9iUpQwAJqx1MFT-nBlXA6ieOKcjtxSLzvXoeRFYr_k"
            />
          </ButtonCustom>
        </Box>
      ) : (
        <Container>
          <Stack>
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
      <SearchInput size="small" placeholder="pesquisar..." />
    </Stack>
  )
}

interface Props {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  user: boolean
}

const drawerWidth = 280

export function DrawerCustom(props: Props) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
      >
        <DrawerComponent user={props.user} />
      </Drawer>
    </Box>
  )
}
