import { CardPopup } from '@components/cardPopup/cardPopup'
import { useUser } from '@hooks/useUser'
import { Layout } from '@layouts/Layout'
import { Columns } from '@widgets/columns/columns'
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
        <CardPopup />
      </div>
    </Layout>
  )
}

export { Home }
