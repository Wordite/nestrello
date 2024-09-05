import { useMutation } from 'react-query'
import { useUserId } from './useUserId'
import { TCard } from '@types/card'
import { card } from 'services/card'
import { useCardsStore } from '@app/store/useCardsStore'
import { useEffect } from 'react'
import { app } from '@app/app'

function useCreateCardMutation(columnId: number) {
  const { getUserId } = useUserId()
  const userId = getUserId()
  const cardsGroups = useCardsStore((state) => state.cards)
  const createCard = useCardsStore((state) => state.createCard)

  const { mutate, data } = useMutation({
    mutationKey: ['card/create'],
    mutationFn: (data: TCard) => card.create(userId, columnId, data),
  })

  if (!cardsGroups.length) return { create() {console.log(cardsGroups)} }
  const newCardOrder = Math.max(
    ...cardsGroups.find((group) => group.columnId === columnId)?.cards.map((card) => card.order)
  )

  useEffect(() => {
    if (!data) return
    createCard(columnId, data)
    app.queryClient.refetchQueries({ queryKey: ['columns/get'] })
  }, [data])

  return {
    create() {
      mutate({ text: 'Карточка', order: newCardOrder ? newCardOrder + 1 : 1, columnId })
    },
  }
}

export { useCreateCardMutation }
