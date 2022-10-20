import { Box, Drawer } from '@mui/material'
import { QuestionProps } from 'global/types/QuestionProps'
import { DrawerComponent } from './DrawerComponent'

interface DrawerProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  username: string | undefined
  data: QuestionProps[]
}

const drawerWidth = 280

export function DrawerCustom({
  username,
  data,
  mobileOpen,
  handleDrawerToggle
}: DrawerProps) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
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
        <DrawerComponent username={username} data={data} />
      </Drawer>
    </Box>
  )
}
