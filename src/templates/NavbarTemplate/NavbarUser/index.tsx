import { MouseEvent, useState } from 'react'
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

interface NavbarProps {
  user: any
  data: QuestionProps[]
}

export function NavbarUser({ user, data }: NavbarProps) {
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
            {user ? (
              <Box>
                <ButtonCustom
                  sx={{ backgroundColor: 'transparent' }}
                  variant="text"
                >
                  <Typography>pedro69</Typography>
                </ButtonCustom>
                <ButtonCustom
                  variant="text"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  <AvatarCustom
                    size={50}
                    image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3MjBlNTVjLWQyMjItNDc2OS05MGI4LWFlYzIyNjJjMDk4OFwvZGR2dG16MS1jYWRmYWE3Zi02ZGE5LTRiNTktYTBmZS02ZWQ1NzQyYWYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9iUpQwAJqx1MFT-nBlXA6ieOKcjtxSLzvXoeRFYr_k"
                  />
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
                {user ? (
                  <AvatarCustom
                    size={50}
                    image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3MjBlNTVjLWQyMjItNDc2OS05MGI4LWFlYzIyNjJjMDk4OFwvZGR2dG16MS1jYWRmYWE3Zi02ZGE5LTRiNTktYTBmZS02ZWQ1NzQyYWYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9iUpQwAJqx1MFT-nBlXA6ieOKcjtxSLzvXoeRFYr_k"
                  />
                ) : (
                  <Avatar />
                )}
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
        data={data}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        user={user}
      />
    </Box>
  )
}
