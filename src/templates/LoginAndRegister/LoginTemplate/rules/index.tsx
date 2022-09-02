export const emailRules = {
  required: 'Este campo é obrigatório',
  minLength: {
    value: 5,
    message: 'O mínimo de caracteres é 7'
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address'
  }
}

export const passwordRules = {
  required: 'Este campo é obrigatório',
  minLength: {
    value: 10,
    message: 'O mínimo de caracteres é 10'
  },
  maxLength: {
    value: 42,
    message: 'O máximo de caracteres é 42'
  }
}
