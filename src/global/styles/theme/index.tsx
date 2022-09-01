import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import 'global/fonts/font.css'

export const theme = createTheme(
  {
    typography: {
      fontFamily: 'SoleilRegular, Open Sans',
      fontWeightRegular: 600,
      fontSize: 21,
      h1: {
        fontFamily: 'SoleilBook',
        fontSize: 32,
        fontWeight: 800
      },
      button: {
        fontFamily: 'SoleilBold',
        fontSize: 21,
        fontWeight: 800,
        textTransform: 'none'
      }
    },
    palette: {
      primary: {
        main: '#ffff'
      }
    }
  },
  ptBR
)
