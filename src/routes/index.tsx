import { NavbarTemplate } from 'templates/NavbarTemplate'
import { Home } from 'pages/Home'

import { Stack } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function UserRoutes() {
  return (
    <BrowserRouter>
      <Stack>
        <NavbarTemplate />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  )
}
