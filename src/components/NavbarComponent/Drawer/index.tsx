import { Box, Drawer } from '@mui/material'
import { QuestionProps } from 'global/types/QuestionProps'
import { Dispatch, SetStateAction } from 'react'
import { DrawerComponent } from './DrawerComponent'

interface DrawerProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  data?: QuestionProps[]
  id: string
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}

const drawerWidth = 280

export function DrawerCustom({
  data,
  mobileOpen,
  handleDrawerToggle,
  id,
  setAnchorEl
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
        <DrawerComponent data={data} menuId={id} setAnchorEl={setAnchorEl} />
      </Drawer>
    </Box>
  )
}
