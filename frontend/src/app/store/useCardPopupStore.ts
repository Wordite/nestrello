import { TCard } from '@types/card'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ICardPopupState {
  card?: TCard
  isActive: boolean
  setCard: (card: TCard) => void
  setIsActive: (isActive: boolean) => void
}

const useCardPopupStore = create<ICardPopupState>()(devtools(immer((set) => ({
  card: {},
  isActive: false,
  setCard: (card) => set(state => {
    state.card = card
  }),
  setIsActive: (isActive) => set(state => {
    state.isActive = isActive
  })
}))))

export { useCardPopupStore }
