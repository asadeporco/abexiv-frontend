import { MouseEvent, useState } from 'react'

import { Avatar, Box, Grid, IconButton, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { AppBarCustom } from 'components/AppbarCustom'
import { ButtonCustom } from 'components/ButtonCustom'
import { GridCustom } from 'components/GridCustom'
import { HomeLogo } from 'components/HomeLogo'
import { DrawerCustom } from 'components/NavbarComponent/Drawer'
import { AutoCompleteSearch } from 'components/AutoCompleteSearch'

import MenuIcon from '@mui/icons-material/Menu'
import { UserMenu } from 'components/NavbarComponent/UserMenu'

interface NavbarProps {
  user: boolean
}

export function NavbarNotUser({ user }: NavbarProps) {
  const navigate = useNavigate()

  //mobile menu
  const menuId = 'primary-search-account-menu-mobile'
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  //drawer
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <AppBarCustom>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <Stack
            width="90vw"
            flexDirection="row"
            justifyContent="space-between"
          >
            <HomeLogo />
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
              <AutoCompleteSearch />
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: { sm: 'none', md: 'flex' } }}
            justifyContent={{ xs: 'end', sm: 'center' }}
          >
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
          </Grid>
          <Grid item xs={1} sx={{ display: { sm: 'flex', md: 'none' } }}>
            <Box>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <Avatar />
              </IconButton>
            </Box>
          </Grid>
        </GridCustom>
      </AppBarCustom>
      <UserMenu
        isMenuOpen={isMenuOpen}
        id={menuId}
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        user={user}
      />
      <DrawerCustom
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        user={user}
      />
    </>
  )
}
