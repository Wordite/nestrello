import { app } from '@app/app'
import { useNavigate } from 'react-router-dom'

function useLogout() {
  const navigate = useNavigate()

  return {
    logout() {
      app.removeToken()
      app.removeUserId()

      navigate('/login')
    },
  }
}

export { useLogout }
