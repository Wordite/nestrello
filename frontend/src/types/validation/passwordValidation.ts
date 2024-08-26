import { RegisterOptions } from 'react-hook-form'

export const passwordValidation: RegisterOptions = {
  required: 'Пароль - обязательное поле',
  minLength: {
    value: 1,
    message: 'Пароль слишком короткий',
  },
  maxLength: {
    value: 100,
    message: 'Максимальная длина пароля - 100 символов',
  },
}
