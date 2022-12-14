import { Menu, MenuItem, Stack } from '@mui/material'
import { ButtonCustom } from 'components/ButtonCustom'

import { useNavigate } from 'react-router-dom'

interface Props {
  anchorEl: HTMLElement | null
  id: string
  isMenuOpen: boolean
  handleMenuClose: () => void
  user: boolean
}

export function UserMenu({
  id,
  isMenuOpen,
  handleMenuClose,
  anchorEl,
  user
}: Props) {
  const menuId = id
  const navigate = useNavigate()
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (
        <Stack>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
