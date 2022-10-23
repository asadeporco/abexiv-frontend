import { useNavigate } from 'react-router-dom'
import { Grid, Stack, Avatar } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { AppBarCustom } from 'components/AppbarCustom'
import { GridCustom } from 'components/GridCustom'
import { ButtonCustom } from 'components/ButtonCustom'
import { AvatarCustom } from 'components/AvatarCustom'
import { HomeLogo } from 'components/HomeLogo'
import { AutoCompleteSearch } from 'components/AutoCompleteSearch'
import { DrawerCustom } from 'components/NavbarComponent/Drawer'
import { UserMenu } from 'components/NavbarComponent/UserMenu'

import { handleLogoutMenuClose } from './functions/handleLogoutMenuClose'
import { handleMenuClose } from './functions/handleMenuClose'
import { handleMenuOpen } from './functions/handleMenuOpen'
import { handleSearch } from './functions/handleSearch'
import { AskModalTemplate } from './AskModalTemplate'
import { useState } from 'react'
import { useUserContext } from 'context/UserContext'

interface NavbarTemplateProps {
  token?: string | null
}

export function NavbarTemplate({ token }: NavbarTemplateProps) {
  const [searchQuestion, setSearchQuestion] = useState()
  const [sentence, setSentence] = useState('')
  const navigate = useNavigate()

  const { username, setUsername, setToken } = useUserContext()

  //mobile menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const menuId = 'button-menu-item'

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

  const [openModal, setOpenModal] = useState(false)

  return (
    <Stack>
      <AppBarCustom>
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
            <Stack width="80%" p="12px">
              <AutoCompleteSearch
                sentence={sentence}
                setSentence={setSentence}
                handleSearch={handleSearch}
                options={searchQuestion}
                setOptions={setSearchQuestion}
              />
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
              <AutoCompleteSearch
                sentence={sentence}
                setSentence={setSentence}
                handleSearch={handleSearch}
                options={searchQuestion}
                setOptions={setSearchQuestion}
              />
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: { sm: 'none', md: 'flex' } }}
            justifyContent={{ xs: 'end', sm: 'center' }}
          >
            {username ? (
              <Stack spacing={2} alignItems="center" direction="row">
                <ButtonCustom onClick={() => setOpenModal(true)} color="info">
                  Perguntar
                </ButtonCustom>
                <ButtonCustom
                  sx={{ backgroundColor: 'transparent' }}
                  variant="text"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={(e) => handleMenuOpen({ e, setAnchorEl })}
                >
                  <Stack alignItems="center" direction="row" spacing={3}>
                    <AvatarCustom size={50} />
                  </Stack>
                </ButtonCustom>
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <ButtonCustom onClick={() => navigate('/login')} size="small">
                  Fazer Login
                </ButtonCustom>
                <ButtonCustom
                  onClick={() => navigate('/register')}
                  color="info"
                  size="small"
                >
                  Registrar-se
                </ButtonCustom>
              </Stack>
            )}
          </Grid>
          <Grid item xs={1} sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls={menuId}
              onClick={(e) => handleMenuOpen({ e, setAnchorEl })}
            >
              {username ? <AvatarCustom size={50} /> : <Avatar />}
            </IconButton>
          </Grid>
        </GridCustom>
      </AppBarCustom>
      <UserMenu
        isMenuOpen={isMenuOpen}
        id={menuId}
        handleLogoutMenuClose={handleLogout}
        handleMenuClose={handleClose}
        anchorEl={anchorEl}
      />
      <DrawerCustom
        id={menuId}
        setAnchorEl={setAnchorEl}
        data={searchQuestion}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <AskModalTemplate token={token} open={openModal} setOpen={setOpenModal} />
    </Stack>
  )
}
