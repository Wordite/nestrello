import { Layout } from '@layouts/Layout'
import { LoginForm } from '@widgets/loginForm/loginForm'

function Login() {
  return (
    <Layout>
      <div className='min-h-screen flex items-center justify-center'>
        <LoginForm />
      </div>
    </Layout>
  )
}

export { Login }
