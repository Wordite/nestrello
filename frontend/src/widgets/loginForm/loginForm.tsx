import { useErrorNotification } from '@hooks/useErrorHandler'
import { useLoginMutation } from '@hooks/useLoginMutation'
import { useToken } from '@hooks/useToken'
import { useUser } from '@hooks/useUser'
import { useUserId } from '@hooks/useUserId'
import { Button } from '@shared/button/button'
import { Input } from '@shared/input/input'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { emailValidation } from 'types/validation/emailValidation'
import { passwordValidation } from 'types/validation/passwordValidation'

type FormValues = {
  email: string
  password: string
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm()

  const { isAuthorized } = useUser()
  const { mutate, data, status } = useLoginMutation()
  const notifyErrors = useErrorNotification()
  const onSubmit: SubmitHandler<FormValues> = data => mutate(data)
  const onError = (errors: any) => notifyErrors(Object.values(errors))
  const { setToken } = useToken()
  const { setUserId } = useUserId()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthorized) navigate('/')
  }, [isAuthorized])

  useEffect(() => {
    if (status === 'error') return notifyErrors([{ type: 'error', message: 'При отправке возникла ошибка!' }])
  }, [status])

  useEffect(() => {
    if (status !== 'success') return

    console.log(data)

    setUserId(data?.userId as number)
    setToken(data?.accessToken as string)

    navigate('/')
  }, [data])

  return (
    <section className='bg-default rounded-[15px] overflow-hidden'>
      <h1 className='text-center mt-[40px] text-[40px] font-semibold'>Войти</h1>

      <form className='w-[600px] h-[380px]' onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='p-[20px] mt-[40px] flex flex-col gap-[40px] h-full'>
          <Input
            {...register('email', emailValidation)}
            id='email'
            type='email'
            data-label-text='Почта'
            ref={null}
            onChange={(e) => setValue('email', e.currentTarget.value)}
          />
          <Input
            {...register('password', passwordValidation)}
            id='password'
            type='password'
            data-label-text='Пароль'
            ref={null}
            onChange={(e) => setValue('password', e.currentTarget.value)}
          />

          <p className='text-[18px]'>
            Нету аккаунта? <Link to='/register'>Зарегистрироваться</Link>
          </p>

          <Button type='submit' className='w-full h-[50px] mt-auto'>
            Войти
          </Button>
        </div>
      </form>
    </section>
  )
}

export { LoginForm }
