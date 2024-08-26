import { useNotification } from './useNotification'

type TUseErrorHandlerArgs = {
  type: string
  message: string
}[]

function useErrorNotification() {
  const notify = useNotification()

  return (errors: TUseErrorHandlerArgs) => {
    errors.forEach((err) => notify({ type: 'error', text: err.message }))
  }
}

export { useErrorNotification }
