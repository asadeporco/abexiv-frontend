import { Menu, MenuItem, Stack } from '@mui/material'
import { ButtonCustom } from 'components/ButtonCustom'

import { useNavigate } from 'react-router-dom'

interface UserMenuProps {
  anchorEl: HTMLElement | null
  id: string
  isMenuOpen: boolean
  handleMenuClose: () => void
  handleLogoutMenuClose?: () => void
  username: any
}

export function UserMenu({
  id,
  username,
  isMenuOpen,
  anchorEl,
  handleMenuClose,
  handleLogoutMenuClose
}: UserMenuProps) {
  const menuId = id
  const navigate = useNavigate()
  return (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {username ? (
        <Stack>
          <MenuItem disabled>Profile</MenuItem>
          <MenuItem onClick={handleLogoutMenuClose}>Sair</MenuItem>
        </Stack>
      ) : (
        <Stack>
          <MenuItem>
            <ButtonCustom onClick={() => navigate('../login')} size="small">
              Fazer Login
            </ButtonCustom>
          </MenuItem>
          <MenuItem>
            <ButtonCustom
              onClick={() => navigate('../register')}
              color="info"
              size="small"
            >
              Registrar-se
            </ButtonCustom>
          </MenuItem>
        </Stack>
      )}
    </Menu>
  )
}
