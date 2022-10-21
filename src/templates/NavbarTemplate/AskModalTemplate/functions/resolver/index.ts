import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  title: yup.string().required('Este campo é obrigatório'),
  category: yup.string().required('Este campo é obrigatório'),
  description: yup
    .string()
    .required('Este campo é obrigatório')
    .min(10, 'Mínimo de 10 caracteres')
    .max(500, 'Máximo de 500 caracteres')
    .trim()
})

export const resolver = yupResolver(schema)
