import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@app/router/router.tsx'
import { QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { app } from '@app/app'
import '@styles/index.scss'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={app.queryClient}>
      <RouterProvider router={router} />
      <Toaster position='top-right' />
    </QueryClientProvider>
  </StrictMode>
)
