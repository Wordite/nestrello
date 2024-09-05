import { TComment } from "./comment"


export type TCard = {
    id?: number,
    text: string,
    order: number,
    columnId: number,
    comments: TComment[]
}

