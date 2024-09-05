import { useMutation } from 'react-query'
import { useUserId } from './useUserId'
import { TCard } from '@types/card'
import { card } from 'services/card'
import { useEffect } from 'react'
import { app } from '@app/app'

function useUpdateCardMutation(columnId: number, cardData: TCard) {
  const { getUserId } = useUserId()
  const userId = getUserId()

  const { mutate, data } = useMutation({
    mutationKey: ['card/update'],
    mutationFn: () => card.update(userId, columnId, cardData),
  })

  useEffect(() => {
    if (!data) return
    app.queryClient.refetchQueries({ queryKey: ['columns/get'] })
  }, [data])

  return {
    update() {
      mutate()
    },
  }
}

export { useUpdateCardMutation }
