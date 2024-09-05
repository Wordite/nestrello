import { useColumnsStore } from "@app/store/useColumnsStore"
import { useUserId } from "./useUserId"
import { useQuery } from "react-query"
import { column } from "services/column"
import { useEffect } from "react"
import { useCardsStore } from "@app/store/useCardsStore"


function useColumns() {
    const { getUserId } = useUserId()
    const userId = getUserId()

    if (!userId) return {}
    const setColumnsStore = useColumnsStore((state) => state.setColumns)
    const columns = useColumnsStore((state) => state.columns)
    const setCards = useCardsStore((state) => state.setCards)

    const { data, isError, isSuccess } = useQuery({
        queryKey: ['columns/get'],
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

export { useColumns }
