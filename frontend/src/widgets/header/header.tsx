import { useLogout } from '@hooks/useLogout'
import { useUser } from '@hooks/useUser'
import { Button } from '@shared/button/button'
import { Link } from 'react-router-dom'

export function Header() {
  const { isAuthorized } = useUser()
  const { logout } = useLogout()

  return (
    <header className='bg-default w-full h-[75px] fixed z-50' style={{ borderBottom: '1px solid var(--color-sub-secondary)' }}>
      <div className='container h-full flex items-center'>
        <p className='font-bold text-[27px]'>NestTrello</p>
        <div className='ml-auto'>
          {isAuthorized ? (
            <Button className='' type='button' onClick={logout}>
              Выйти из аккунта
            </Button>
          ) : (
            <Button className='' type='button'>
              <Link to='/login' className='text-white'>
                Войти
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
