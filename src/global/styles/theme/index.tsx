import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import 'global/fonts/font.css'

export const theme = createTheme(
  {
    typography: {
      allVariants: {
        color: '#000'
      },
      fontFamily: 'SoleilRegular, Open Sans',
      fontWeightRegular: 600,
      fontSize: 21,
      h1: {
        fontFamily: 'SoleilBook',
        fontSize: '52px',
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
      },
      text: {
        primary: '#000000'
      }
    }
  },
  ptBR
)
