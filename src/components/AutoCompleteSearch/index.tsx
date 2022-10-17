import { Autocomplete, TextField, TextFieldProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type AutocompleteSearchProps = {} & TextFieldProps

export function AutoCompleteSearch({ ...props }: AutocompleteSearchProps) {
  return (
    <Autocomplete
      options={[
        { label: 'teste', id: '1' },
        { label: 'teste2', id: '2' }
      ]}
      noOptionsText="Nenhuma pergunta encontrada"
      color="secondary"
      size="small"
      onChange={(e, value) => {
        if (value) {
          console.log(value.label)
        }
      }}
      forcePopupIcon={false}
      clearIcon={null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          color="info"
          label="Pesquisar..."
          InputProps={{
            ...params.InputProps,
            endAdornment: <SearchIcon color="info" />
          }}
        />
      )}
    />
  )
}
