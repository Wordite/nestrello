import { app } from "@app/app"


function useToken() {
    return {
        setToken(token: string) {
            app.setToken(token)
        },

        getToken(): string | null {
            return app.getToken()
        }
    }
}

export { useToken }
