import { useMutation } from 'react-query'
import { useUserId } from './useUserId'
import { useEffect } from 'react'
import { app } from '@app/app'
import { TComment } from '@types/comment'
import { comment } from 'services/comment'

function useCreateCommentMutation(columnId: number, cardId: number) {
  const { getUserId } = useUserId()
  const userId = getUserId()
  const { mutate, data } = useMutation({
    mutationKey: ['comment/create'],
    mutationFn: (data: TComment) => comment.create(userId, columnId, cardId, data),
  })

  useEffect(() => {
    if (!data) return
    app.queryClient.refetchQueries({ queryKey: ['columns/get'] })
  }, [data])

  console.log({ text: 'Новый комментарий', cardId })

  return {
    create() {
      mutate({ text: 'Новый комментарий', cardId })
    },
  }
}

export { useCreateCommentMutation }
