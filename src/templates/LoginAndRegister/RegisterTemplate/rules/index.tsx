export const emailRules = {
  required: 'Este campo é obrigatório',

  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Este e-mail é inválido'
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

export const validate = (password: string, confirmPassword: string) => {
  return {
    required: 'Este campo é obrigatório',
    minLength: {
      value: 10,
      message: 'O mínimo de caracteres é 10'
    },
    maxLength: {
      value: 42,
      message: 'O máximo de caracteres é 42'
    },
    validate: {
      matchesPreviousPassword: () => {
        if (password === confirmPassword) {
          return null
        } else {
          return 'As senhas não são iguais'
        }
      }
    }
  }
}

export const checkRules = {
  validate: {
    check: (value: boolean) =>
      value === true || 'Você precisa aceitar os termos de uso'
  }
}
