import { app } from '@app/app'
import { TColumn } from '@types/column'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IColumnsState {
  columns: TColumn[]
  setColumns: (columns: TColumn[]) => void
  setTitle: (id: number, title: string) => void
  setOrder: (id: number, order: number) => void
  // createCard: (id: number) => void,
  // updateCardId: (columnIndex: number, cardIndex: number, id: number) => void
}


const getColumn: (state: IColumnsState, id: number) => number = (state, id) => {
    const column = state.columns.findIndex(column => column.id === id)
    if (column === -1) return false

    return column
}

const useColumnsStore = create<IColumnsState>()(devtools(immer((set, get) => ({
  columns: [],
  setColumns: columns => set({ columns }),
  setTitle: (id, title) => set(state => {
    const column = getColumn(state, id)
    if (column !== 0 && !column) return

    state.columns[column].title = title
  }),
  setOrder: (id, order) => set(state => {
    const column = getColumn(state, id)
    if (column !== 0 && !column) return

    state.columns[column].order = order
  })
}))))

export { useColumnsStore }
