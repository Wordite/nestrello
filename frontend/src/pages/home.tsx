import { useUser } from '@hooks/useUser'
import { Layout } from '@layouts/Layout'
import { Columns } from '@widgets/columns/Columns'
import { Sidebar } from '@widgets/sidebar/sidebar'
import { useEffect } from 'react'

function Home() {
  const { isAuthorized, user } = useUser()

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Layout>
      <div className='flex'>
        <Sidebar />
        <Columns />
      </div>
    </Layout>
  )
}

export { Home }
