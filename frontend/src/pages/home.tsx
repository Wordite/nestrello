import { useUser } from "@hooks/useUser"
import { Layout } from "@layouts/Layout"
import { useEffect } from "react"


function Home() {
  const { isAuthorized, user } = useUser()

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Layout>
        <h1 className="text-[200px]">Home</h1>
        <p>{isAuthorized ? user?.email : ''}</p>
    </Layout>
  )
}

export { Home }
