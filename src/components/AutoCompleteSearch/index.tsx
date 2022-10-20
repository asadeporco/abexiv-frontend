import { useNavigate } from 'react-router-dom'
import { Autocomplete, TextField, TextFieldProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { QuestionProps } from 'global/types/QuestionProps'

type AutocompleteSearchProps = {
  options?: QuestionProps[]
  sentence: string
  setSentence: any
  setOptions: any
  handleSearch: any
} & TextFieldProps

export function AutoCompleteSearch({
  options,
  setOptions,
  sentence,
  setSentence,
  handleSearch,
  ...props
}: AutocompleteSearchProps) {
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/questions?search=${sentence}`)
      }}
    >
      <Autocomplete
        options={options ?? []}
        noOptionsText="Nenhuma pergunta encontrada"
        color="secondary"
        size="small"
        onChange={(e, value) => {
          if (value) {
            navigate(`../questions/${value?.id}`)
            value = null
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
            onChange={(e) => {
              handleSearch(setOptions, e.target.value)
              setSentence(e.target.value)
            }}
            color="info"
            label="Pesquisar..."
            InputProps={{
              ...params.InputProps,
              endAdornment: <SearchIcon />
            }}
          />
        )}
      />
    </form>
  )
}
