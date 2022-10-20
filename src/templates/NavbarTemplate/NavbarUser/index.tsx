import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { AppBarCustom } from 'components/AppbarCustom'
import { GridCustom } from 'components/GridCustom'
import { Grid, Stack, Box, Typography, Avatar } from '@mui/material'
import { ButtonCustom } from 'components/ButtonCustom'
import { AvatarCustom } from 'components/AvatarCustom'
import { HomeLogo } from 'components/HomeLogo'
import { AutoCompleteSearch } from 'components/AutoCompleteSearch'
import { DrawerCustom } from 'components/NavbarComponent/Drawer'
import { UserMenu } from 'components/NavbarComponent/UserMenu'

import { QuestionProps } from 'global/types/QuestionProps'
import { handleLogoutMenuClose } from './functions/handleLogoutMenuClose'
import { handleMenuClose } from './functions/handleMenuClose'
interface NavbarProps {
  username: any
  setToken: Dispatch<SetStateAction<string | undefined>>
  setUsername: Dispatch<SetStateAction<string | undefined>>
  data: QuestionProps[]
}

export function NavbarUser({
  username,
  setUsername,
  setToken,
  data
}: NavbarProps) {
  const navigate = useNavigate()

  //mobile menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const menuId = 'button-menu-item'
  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    handleLogoutMenuClose(navigate, setAnchorEl, setToken, setUsername)
  }

  const handleClose = () => {
    handleMenuClose(setAnchorEl)
  }

  //drawer
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarCustom sx={{ margin: '0px' }}>
        <Grid
          item
          flexDirection="row"
          justifyContent="space-between"
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <Stack
            width="90vw"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack width="80%">
              <AutoCompleteSearch options={data} />
            </Stack>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Grid>
        <GridCustom
          justifyContent={{ sm: 'space-between', md: 'center' }}
          alignItems="center"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Grid item xs={4} justifyContent={{ xs: 'flex-start', sm: 'center' }}>
            <HomeLogo />
          </Grid>
          <Grid item xs={4}>
            <Stack maxWidth={750}>
              <AutoCompleteSearch options={data} />
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: { sm: 'none', md: 'flex' } }}
            justifyContent={{ xs: 'end', sm: 'center' }}
          >
            {username ? (
              <Box>
                <ButtonCustom
                  sx={{ backgroundColor: 'transparent' }}
                  variant="text"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  <Stack alignItems="center" direction="row" spacing={3}>
                    <Typography>{username}</Typography>
                    <AvatarCustom size={50} />
                  </Stack>
                </ButtonCustom>
              </Box>
            ) : (
              <Stack direction="row" spacing={2}>
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
            )}
          </Grid>
          <Grid item xs={1} sx={{ display: { sm: 'flex', md: 'none' } }}>
            <Box>
              <IconButton aria-controls={menuId} onClick={handleMenuOpen}>
                {username ? <AvatarCustom size={50} /> : <Avatar />}
              </IconButton>
            </Box>
          </Grid>
        </GridCustom>
      </AppBarCustom>
      <UserMenu
        isMenuOpen={isMenuOpen}
        id={menuId}
        handleLogoutMenuClose={handleLogout}
        handleMenuClose={handleClose}
        anchorEl={anchorEl}
        user={username}
      />
      <DrawerCustom
        data={data}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        user={username}
      />
    </Box>
  )
}
