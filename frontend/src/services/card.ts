import { app } from "@app/app"
import { TCard } from "@types/card"


class Card {
    create(userId: number, columnId: number, data: TCard) {
        return app.client.post<TCard>(`users/${userId}/columns/${columnId}/cards`, data).then(res => res.data)
    }

    update(userId: number, columnId: number, data: TCard) {
        const cardId = data.id
        delete data.id

        console.log('fetch: ', data)
        return app.client.put<TCard>(`users/${userId}/columns/${columnId}/cards/${cardId}`, data)
    }
}



export const card = new Card()

