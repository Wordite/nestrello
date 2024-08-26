import axios from "axios"
import { QueryCache, QueryClient } from "react-query"

class App {

    readonly queryClient = new QueryClient()
    readonly queryCache = new QueryCache()

    readonly client = axios.create({
        baseURL: this.getServerUrl()
    })

    getServerUrl(): string {
        return import.meta.env.VITE_SERVER_URL
    }

    setHeaderToken(token: string) {
        this.client.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    setToken(token: string) {
        window.localStorage.setItem('token', token)
        this.client.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    removeToken() {
        window.localStorage.removeItem('token')
        delete this.client.defaults.headers.common.Authorization
    }

    getToken(): string | null {
        return window.localStorage.getItem('token')
    }

    removeUserId() {
        window.localStorage.removeItem('userId')
    }

    setUserId(userId: number) {
        if (!userId) return
        window.localStorage.setItem('userId', userId.toString())
    }

    getUserId(): number {
        const userId = window.localStorage.getItem('userId')
        if (userId && !isNaN(parseInt(userId))) return +userId

        return 0
    }

    initApp() {
        const token = this.getToken()
        if (token) this.setHeaderToken(token)
    }
}

export const app = new App()
