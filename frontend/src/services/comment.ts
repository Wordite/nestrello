import { app } from "@app/app"
import { TComment } from "@types/comment"


class Comment {
    create(userId: number, columnId: number, cardId: number, data: TComment) {
        return app.client.post<TComment>(`users/${userId}/columns/${columnId}/cards/${cardId}/comments`, data).then(res => res.data)
    }

    update(userId: number, columnId: number, cardId: number, data: TComment) {
        const commentId = data.id
        delete data.id

        return app.client.put<TComment>(`users/${userId}/columns/${columnId}/cards/${cardId}/comments/${commentId}`, data).then(res => res.data)
    }
}


export const comment = new Comment()

