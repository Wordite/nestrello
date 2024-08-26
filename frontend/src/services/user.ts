import { app } from '@app/app'
import { TLoginResponse } from 'types/loginResponse'
import { TUser } from 'types/user'

interface LoginData {
  email: string
  password: string
}

class User {
  login(data: any) {
    return app.client
      .post<LoginData, { data: TLoginResponse }>('auth/login', data)
      .then((res) => res.data)
  }

  getById(id: number) {
    return app.client.get<TUser>(`/users/${id}`).then((res) => res.data)
  }
}

export const user = new User()
