import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

export const theme = createTheme(
  {
    typography: {
      fontFamily: 'Fjalla One'
    },
    palette: {
      primary: {
        main: '#7A5CFA'
      }
    }
  },
  ptBR
)
