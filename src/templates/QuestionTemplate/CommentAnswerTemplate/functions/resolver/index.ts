import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  description: yup
    .string()
    .required('É necessário informar uma descrição')
    .min(10, 'A descrição deve ter no mínimo 10 caracteres')
    .max(500, 'A descrição deve ter no máximo 500 caracteres')
    .trim()
})

export const resolver = yupResolver(schema)
