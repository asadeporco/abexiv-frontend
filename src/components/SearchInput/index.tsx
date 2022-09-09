import { TextField, TextFieldProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchInputProps = {} & TextFieldProps

export function SearchInput({ ...props }: SearchInputProps) {
  return (
    <TextField
      autoComplete="off"
      color="info"
      {...props}
      InputProps={{ startAdornment: <SearchIcon fontSize="small" /> }}
    />
  )
}
