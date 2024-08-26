import { app } from "@app/app"


function useUserId() {
    return {
        setUserId(id: number) {
            app.setUserId(id)
        },

        getUserId(): number {
            return app.getUserId()
        }
    }
}

export { useUserId }
