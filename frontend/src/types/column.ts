import { TCard } from "./card"


export type TColumn = {
    id: number,
    title: string,
    order: number,
    userId: number,
    cards: TCard[]
}

