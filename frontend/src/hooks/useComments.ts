import { useColumnsStore } from "@app/store/useColumnsStore"
import { useUserId } from "./useUserId"
import { useQuery } from "react-query"
import { column } from "services/column"
import { useEffect } from "react"
import { useCardsStore } from "@app/store/useCardsStore"


function useComments(columnId: number, cardId: number) {
    const { getUserId } = useUserId()
    const userId = getUserId()

    if (!userId) return {}

    const { data, isError, isSuccess } = useQuery({
        queryKey: ['comments/get'],
        queryFn: () => column.getAll(userId),
        select: data => data.data
    })

    useEffect(() => {
      if (!data) return

      setColumnsStore(data)
      data.forEach(column => setCards(column.id, column.cards))
    }, [data])

    return { columns, isError, isSuccess }
}

export { useComments }
