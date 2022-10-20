import { Autocomplete, TextField, TextFieldProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { QuestionProps } from 'global/types/QuestionProps'

type AutocompleteSearchProps = { options: QuestionProps[] } & TextFieldProps

export function AutoCompleteSearch({
  options,
  ...props
}: AutocompleteSearchProps) {
  return (
    <Autocomplete
      options={options}
      noOptionsText="Nenhuma pergunta encontrada"
      color="secondary"
      size="small"
      onChange={(e, value) => {
        if (value) {
          console.log(value?.title)
        }
      }}
      forcePopupIcon={false}
      clearIcon={null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          color="info"
          label="Pesquisar..."
          InputProps={{
            ...params.InputProps,
            endAdornment: <SearchIcon />
          }}
        />
      )}
    />
  )
}
