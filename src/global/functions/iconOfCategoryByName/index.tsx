import CalculateIcon from '@mui/icons-material/Calculate'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LanguageIcon from '@mui/icons-material/Language'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

export function iconOfCategoryByName(name: string, fontSize?: number) {
  switch (name) {
    case 'Matemática':
      return <CalculateIcon sx={{ fontSize: fontSize ?? 22 }} />
    case 'História':
      return <CalculateIcon sx={{ fontSize: fontSize ?? 22 }} />
    case 'Português':
      return <LanguageIcon sx={{ fontSize: fontSize ?? 22 }} />
    case 'Física':
      return <AccessTimeIcon sx={{ fontSize: fontSize ?? 22 }} />
    default:
      return <AccountTreeIcon sx={{ fontSize: fontSize ?? 22 }} />
  }
}
