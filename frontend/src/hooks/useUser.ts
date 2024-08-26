import { useQuery } from "react-query"
import { useUserId } from "./useUserId"
import { user } from "services/user"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function useUser() {
    const { getUserId } = useUserId()
    const id = getUserId()
    const navigate = useNavigate()

    const { data, isError, isSuccess } = useQuery({
        queryKey: ['user/self'],
        queryFn: () => user.getById(id),
    })

    useEffect(() => {
        if (!isError) return
        navigate('/login')
    }, [isError])

    return { isAuthorized: isSuccess, user: data, isUnauthorized: isError }
}

export { useUser }