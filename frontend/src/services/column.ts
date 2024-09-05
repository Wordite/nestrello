import { app } from "@app/app"
import { TColumn } from "@types/column"


class Column {
    setNewOrder(id: number) {
        return app.client.post(id)
    }

    getAll(userId: number) {
        return app.client.get<TColumn[]>(`users/${userId}/columns`)
    }
}



export const column = new Column()

