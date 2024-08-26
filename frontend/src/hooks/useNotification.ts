import toast from 'react-hot-toast'

type TUseNotificationArgs = {
  text: string
  type: 'success' | 'error'
}

function useNotification() {
  return ({ text, type }: TUseNotificationArgs) => {
    toast[type](text, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }
}

export { useNotification }
