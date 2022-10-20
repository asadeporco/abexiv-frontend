import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Nome de usuário obrigatório')
    .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres')
    .max(20, 'Nome de usuário deve ter no máximo 20 caracteres')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Nome de usuário deve conter apenas letras e números'
    ),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),

  password: yup
    .string()
    .required('Este campo é obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(12, 'A senha deve ter no máximo 12 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem'),
  check: yup.boolean().isTrue('Você precisa aceitar os termos de uso')
})

export const resolver = yupResolver(schema)
