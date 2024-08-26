import { Button } from '@shared/button/button'
import { Input } from '@shared/input/input'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function RegisterForm() {
  const { register } = useForm()

  return (
    <section className='bg-default rounded-[15px] overflow-hidden'>
      <h1 className='text-center mt-[40px] text-[40px] font-semibold'>Создать аккаунт</h1>

      <form className='w-[600px] h-[495px] '>
        <div className='p-[20px] mt-[40px] flex flex-col gap-[40px] h-full'>
          <Input {...register('email', { required: true, maxLength: 100, minLength: 1 })} id='email' type='text' data-label-text='Почта' ref={null} />
          <Input {...register('password', { required: true, maxLength: 255, minLength: 1 })} id='password' type='password' data-label-text='Пароль' ref={null} />
          <Input {...register('password', { required: true, maxLength: 255, minLength: 1 })} id='password' type='password' data-label-text='Повторите пароль' ref={null} />

          <p className='text-[18px]'>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>

          <Button className='w-full h-[50px] mt-auto'>Зарегистрироваться</Button>
        </div>
      </form>
    </section>
  )
}

export { RegisterForm }
