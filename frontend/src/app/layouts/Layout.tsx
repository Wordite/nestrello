import { useInitApp } from '@hooks/useInitApp'
import { Footer } from '@widgets/footer/footer'
import { Header } from '@widgets/header/header'
import { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
  useInitApp()

  return (
    <>
      <Header />
      <main className=''>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export { Layout }
