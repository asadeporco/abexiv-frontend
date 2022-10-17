import { Autocomplete, Button, TextField, TextFieldProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

type AutocompleteSearchProps = {} & TextFieldProps

export function AutoCompleteSearch({ ...props }: AutocompleteSearchProps) {
  const [value, setValue] = useState<string | undefined>(undefined)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(value)
      }}
    >
      <Autocomplete
        options={[
          { label: 'teste', id: '1' },
          { label: 'teste2', id: '2' }
        ]}
        noOptionsText="Nenhuma pergunta encontrada"
        color="secondary"
        size="small"
        onChange={(e, value) => {
          setValue(value?.label)
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
              endAdornment: value ? (
                <Button
                  type="submit"
                  sx={{ margin: '0px', padding: '0px', minWidth: '0px' }}
                >
                  <SearchIcon color="info" />
                </Button>
              ) : (
                <SearchIcon color="disabled" />
              )
            }}
          />
        )}
      />
    </form>
  )
}
