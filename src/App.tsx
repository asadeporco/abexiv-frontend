import { UserRoutes } from 'routes'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './global/styles/theme'
import { UserProvider } from 'context/UserContext'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <UserRoutes />
      </UserProvider>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
