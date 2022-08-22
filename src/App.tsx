import { UserRoutes } from 'routes'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './global/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
       <UserRoutes />
    </ThemeProvider>
  )
}

export default App
