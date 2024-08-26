import { RegisterOptions } from 'react-hook-form'

export const emailValidation: RegisterOptions = {
  required: 'Почта - обязательное поле',
  minLength: {
    value: 1,
    message: 'Почта слишком короткий',
  },
  maxLength: {
    value: 100,
    message: 'Максимальная длина почты - 100 символов',
  },
  pattern: {
    value: /\S+@\S+\.\S{2,}/,
    message: 'Введённая вами почта не корректна',
  },
}
