// createCard: (id) => set(state => {
//     const column = getColumn(state, id)
//     if (column !== 0 && !column) return

//     const cards = state.columns[column].cards
//     const newCardOrder = cards[cards.length - 1] ? cards[cards.length - 1].order + 1 : 1
//     const columnId = state.columns[column].id
//     const newCard = { text: 'Карточка', order: newCardOrder, columnId }

//     const newCardIndex = state.columns[column].cards.push(newCard) - 1

//     card.create(app.getUserId(), columnId, newCard).then(res => {
//       const data = res.data
//       if (!data) return

//       get().updateCardId(column, newCardIndex, data.id as number)
//     })
//   }),
//   updateCardId: (columnIndex, cardIndex, id) => set(state => {
//     state.columns[columnIndex].cards[cardIndex].id = id
//   }),
//   updateCardTitle: (columnId, cardId, title) => set(state => {
//     const cardIndex = state.columns.find(column => column.id === columnId)?.cards.find(card => card.id === cardId)
//     if (cardIndex === -1) return

//     state.columns[columnIndex].cards[cardIndex].text = title
//   })


import { app } from '@app/app'
import { TCard } from '@types/card'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ICardsState {
  cards: { columnId: number, cards: TCard[] }[]
//   setColumns: (columns: TColumn[]) => void
//   setTitle: (id: number, title: string) => void
//   setOrder: (id: number, order: number) => void
  // createCard: (id: number) => void,
  // updateCardId: (columnIndex: number, cardIndex: number, id: number) => void
}


const getCard: (state: ICardsState, id: number) => [number, number] = (state, id) => {
    let groupIndex = -1
    let cardIndex = -1

    state.cards.forEach((group, groupIndexIteration) => {
        group.cards.forEach((card, cardIndexIteration) => {
            if (card.id === id) {
                groupIndex = groupIndexIteration
                cardIndex = cardIndexIteration
            }
        })
    })

    return [groupIndex, cardIndex]
}

const useCardsStore = create<ICardsState>()(devtools(immer((set, get) => ({
  cards: [],
  setCards: (columnId, cards) => set(state => {
    const index = state.cards.findIndex(cardGroup => cardGroup.columnId === columnId)

    if (index === -1) state.cards.push({ columnId, cards })
    else {
        state.cards[index].cards = cards
    }
  }),
  setTitle: (id, title) => set(state => {
    const [groupIndex, cardIndex] = getCard(state, id)

    if (groupIndex !== -1) {
        state.cards[groupIndex].cards[cardIndex].text = title
    }
  }),
  setOrder: (id, order) => set(state => {
    const [groupIndex, cardIndex] = getCard(state, id)

    if (groupIndex !== -1) {
        state.cards[groupIndex].cards[cardIndex].order = order
    }
  }),
  createCard: (columnId, card) => set(state => {
    const group = state.cards.find(group => group.columnId === columnId)
    if (group) group.cards.push(card)
  }),
  getCard: (id: number) => {
    const [groupIndex, cardIndex] = getCard(id)
    return get().cards[groupIndex].cards[cardIndex]
  }
}))))

export { useCardsStore }
